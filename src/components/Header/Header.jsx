import React from 'react';
import "./Header.css";
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
    return (
       <div>
         <div className='navber'>
            <Link to="/">Home</Link>
            <Link to="/about">about</Link>
            <Link to="/shop">Shop</Link>
        </div>
        <Outlet></Outlet>
       </div>
    );
};

export default Header;