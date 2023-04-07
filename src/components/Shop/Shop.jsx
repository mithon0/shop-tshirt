import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShopCard from '../ShopCard/ShopCard';
import './Shop.css'
const Shop = () => {
    const shopData =useLoaderData();
    
    return (
        <div className='container'>
            <div className='card-container1'>
            {
                shopData.map(shop=><ShopCard
                key={shop._id}
                shop={shop}
                ></ShopCard>)
            }
            </div>
            <div>
                <h1>cart</h1>
            </div>
        </div>
    );
};

export default Shop;