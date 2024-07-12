import React,{Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Cart from './Components/Cart';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Product from './Components/Product'

class App extends Component{
  render(){
    return(
      <div className='App'>
        <Router>
          <Navbar/>
          <Routes>
              <Route path="/" element = {<Home/>}></Route>
              <Route path="/cart" element = {<Cart/>}></Route>
              <Route path="/login" element = {<Login/>}></Route>
              <Route path='/signup' element ={<Signup />}></Route>
              <Route path='/products' element = {<Product/>}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}

export default App;
