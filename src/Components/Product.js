import { TiArrowSortedUp } from "react-icons/ti";
import React, { Component } from "react";
import "../assets/Product.css";
import ProductCard from "./ProductCard"; // Import the ProductCard component

class Products extends Component {
  constructor(props) {
    super(props);
    var filter = [
      {
        title: "CATEGORY",
        tags: ["BEAUTY", "EYESHADOW", "FACE POWDER", "LIPSTICK", "NAILPOLISH"],
      },
      {
        title: "TITLE",
        tags: [
          "Essence Mascara Lash Princess",
          "Powder Canister",
          "Eyeshadow Palette with Mirror",
          "Red Lipstick",
          "Red Nail Polish",
        ],
      },
      {
        title: "PRICE",
        tags: [9.99, 19.99, 14.99, 12.99, 8.99],
      },
    ];
    this.state = {
      products: [],
      filteredProducts : [],
      filterProducts: filter,
      loading: true,
      error: null,
      showFilters: null,
      filterStatus:false // Correctly initialized to null
    };

    // Bind the event handler
    this.handleFilterToggle = this.handleFilterToggle.bind(this);
  }

  componentDidMount() {
    this.fetchProducts();
  }

  handleFilterChange(type,value){
    console.log(type,value)
      let tlist = []
      this.state.products.map((item,index)=>{
        if(item[type.toLowerCase()]== value.toLowerCase()) tlist.push(item)
          
        
      })
      this.setState({filteredProducts:tlist, filterStatus:true})
  }

  handleFilterToggle(index) {
    this.setState((prevState) => ({
      showFilters: prevState.showFilters === index ? null : index,
    }));
  }

  fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products"); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      this.setState({ products: data.products, loading: false });
    } catch (error) {
      this.setState({ error, loading: false });
    }
  };

  render() {
    const { products, loading, error, filterProducts, filteredProducts,showFilters,filterStatus } = this.state;
    console.log(filteredProducts,"filteredProducts")

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return (
      <div className="products-container">
        <div className="filters">
          <h2>Filters</h2>
          {filterProducts?.map((item, index) => (
            <React.Fragment key={index}>
              <div className="filterTitle" onClick={this.handleFilterToggle.bind(this, index)}>
                <p>{item.title}</p>
                <div className={showFilters === index ? "arrowIconUp" : "arrowIconDown"}>
                  <TiArrowSortedUp className="arrow" />
                </div>
              </div>
              {showFilters === index &&
                item?.tags?.map((tagItem, tagIndex) => (
                  <div className="tagList" key={tagIndex} onChange={()=>this.handleFilterChange(item.title,tagItem)}>
                    <input type="checkbox"></input>
                    {tagItem}
                  </div>
                ))}
              <div></div>
            </React.Fragment>
          ))}
        </div>
        <div className="product-list">
          {filterStatus?filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          )) : products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  }
}

export default Products;
