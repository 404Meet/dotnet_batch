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
        <h1>FIND-MY-EVENTS</h1>
        <ul className='nav-links'>
            <Link style={navstyle} to='/'>
                <li>Home</li>
            </Link> 
            <Link style={navstyle}  to='/upEvents'>
                <li>UpComing Events</li>
            </Link>
            <Link style={navstyle} to='/about'>
                <li>About</li>
            </Link>
            
        </ul>
    </nav>
    </div>
  );
}

export default Nav;
