import React, { Component } from 'react';
import logo from './bell.ico';

const Menu = () => {
  return (
    <nav className="navbar navbar-default">
        <div className="container-fluid">
          <ul className="nav navbar-nav">
            <li><a href="#home" style={{color: 'white', fontWeight: 'bold'}}>
              <span><img src={logo} height="20px" alt="tremind logo"/></span>
              Tremind
            </a></li>
            <li><a href="#home" style={{color: 'white'}}>Home</a></li>
            <li className="active"><a href="#task" style={{color: 'white', backgroundColor: '#20124D'}}>Task</a></li>
            <li><a href="#statistics" style={{color: 'white'}}>Statistics</a></li>
            <li><a href="#myprofile" style={{color: 'white'}}>My Profile</a></li>
          </ul>
        </div>
      </nav>
   )
};

export default Menu;