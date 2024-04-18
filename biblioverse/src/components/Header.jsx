import React from 'react';
import { Link } from 'react-router-dom';
import "./layout.css";
export default function Header(){
    
    return(

        <header id="header">
            {/* This is JSX */}
            <div className='nav-bar'>
            <h2 id="site-name"><a href="/">TinyTales</a></h2>
            <nav id="site-navbar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/books">Books</Link></li>
                    <li><Link to="/authors">Authors</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
            </div>
        </header>
    );
}