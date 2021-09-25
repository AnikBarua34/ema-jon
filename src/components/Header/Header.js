import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div>
                <img className='image' src={logo} alt="" />
           <nav className='navbar-head'>
               <a href="/shop">Shop</a>
               <a href="/product">Product</a>
               <a href="/cart">Cart</a>
           </nav>
        </div>
    );
};

export default Header;