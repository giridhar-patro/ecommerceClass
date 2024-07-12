
import React,{Component} from 'react'
import '../assets/Home.css'
import { Link } from "react-router-dom";

class Home extends Component {
    render(){
        return (
            <div className='Home'>
            
            <h3 className='sale'>Sale is on</h3>
             <h1>We are Providing best products</h1>
              <h2>with best offers Upto <span>70%</span> Off.</h2>
              <Link to ="/products"><button>Explore More</button></Link>
            </div>
          )
        }
    }
  

export default Home