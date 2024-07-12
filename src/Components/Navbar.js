import React, { Component } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BiCartAlt } from "react-icons/bi";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
import { FcMenu } from "react-icons/fc";
import "./Navbar.css";

class Navbar extends Component {
  handleClick(){
    
  }
  render() {
    return (
      <div className="Navbar">
        <div className="Navbar_container">
          <FcMenu className="Navbar_icon" onClick={this.handleClick}/>
          <div className="Navbar_links">
            <p className="Navbar_title">Giridhar</p>
            <MDBDropdown>
              <MDBDropdownToggle
                tag="a"
                className="btn btn-primary Navbar_icon"
              >
                <BsFillPersonFill />
              </MDBDropdownToggle>
              <MDBDropdownMenu className="custom-dropdown-menu">
                <Link to="/login">
                  <MDBDropdownItem link className="custom-dropdown-item">
                    Login
                  </MDBDropdownItem>
                </Link>
                <Link to="/signup">
                  <MDBDropdownItem link className="custom-dropdown-item">
                    Sign up
                  </MDBDropdownItem>
                </Link>
              </MDBDropdownMenu>
            </MDBDropdown>
            <Link to="/cart" className="Navbar_icon">
              <BiCartAlt />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
