import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';



class Header extends React.Component {
  render() {
    return (
      <header>
      	<div className="logo"></div>

      	<nav>
      		<ul>
      			<li className="first">
      				<Link to="/">Home</Link>
      			</li>
      			<li>
      				<Link to="/Products">Products</Link>
      			</li>
      			<li className="last">
      				<Link to="/Contact">Contact</Link>
      			</li>
      		</ul>
      	</nav>
      </header>
    );
  }
}

export default Header;
