import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='navigation'>
            <div className="nav-logo">
                <h1>canvasShoe</h1>
            </div>
            <div className="nav-menu">
                <a href="./home">Home</a>
                <a href="./shop">Shop <sup className='hot'>HOT</sup></a>
                <a href="./featured">Featured</a>
                <a href="./pages">pages</a>
                <a href="./blogs">Blogs</a>
            </div>
        </div>
    );
};

export default Header;