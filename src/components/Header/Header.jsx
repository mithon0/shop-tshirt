import React from 'react';
import "./Header.css";
import { Outlet } from 'react-router-dom';

const Header = () => {
    return (
       <div>
         <div className='navber'>
            <a href="/">Home</a>
            <a href="/about">about</a>
            <a href="/shop">Shop</a>
        </div>
        <Outlet></Outlet>
       </div>
    );
};

export default Header;