import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <nav className='header container'>
            <h1>Knowledge Cafe</h1>
            <img className='header-img' src="../../../public/header-img.png" alt="" />
        </nav>
    );
};

export default Header;