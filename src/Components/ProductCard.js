import React from 'react';
import '../assets/Home.css'; // Create a separate CSS file for the card styles

const ProductCard = ({ product }) => {
  return (
    <div className='product-card'>
      <img src={product.images[0]} alt={product.title} />
      <p className='description'>{product.description}</p>
      <p className='product-card-cat'>{product.category}</p>
      <p>{product.price}</p>
      <button className='p-button'>Add to cart</button>
    </div>
  );
};

export default ProductCard;
