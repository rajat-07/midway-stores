import React, { Component } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Navbar extends Component {

    constructor(props){
        super(props)
        this.handlelgt = this.handlelgt.bind(this);
      }

      handlelgt(){
          window.location.reload();
      }

  render() {
    return (
      <Router>
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <img src="Images/logo.png" alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ">
            <Link to="/" className="nav-link navbar-brand">
              Midway Stores
            </Link>
          </li>
          {/* <div className="logbtn right" > */}
            <li className="nav-item lgtbtn" >
                <Link to="/itinerary" className="nav-link" onClick={this.handlelgt}>
                Log Out
                </Link>
            </li>
          {/* </div> */}
        </ul>
      </NavWrapper>
      </Router>
    );
  }
}

const NavWrapper = styled.nav`
background: linear-gradient(-135deg, #c850c0, #4158d0);
  .nav-link {
    color: white !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
  img{
      border-radius: 50%;
      width: 100px;
      height: 100px;
  }
  ul{
    text-align: right;
  }
  .lgtbtn{
    padding-left: 1000px;
  }
`;

export default Navbar;