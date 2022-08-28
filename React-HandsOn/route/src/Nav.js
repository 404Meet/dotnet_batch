import './App.css';
import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
    const navstyle ={
        color: 'white'
    };
  return (
    <div>
    <nav>
        <h1>NAVBAR</h1>
        <ul className='nav-links'>
            <Link style={navstyle} to='/about'>
                <li>About</li>
            </Link>
            <Link style={navstyle}  to='/shop'>
                <li>Shop</li>
            </Link>
        </ul>
    </nav>
    </div>
  );
}

export default Nav;
