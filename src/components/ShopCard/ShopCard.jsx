import React from 'react';
import './ShopCard.css';
const ShopCard = ({shop}) => {
    console.log(shop);
    const {picture,name,gender,price,_id
    }=shop;
    return (
        <div className='card-container'>
            <div className='img-container'>
                <img className='shirt-img' src={picture} alt="" />
            </div>
            <div> 
                <h1>{name}</h1>
                <p>{gender}</p>
                <h3>{price}</h3>
                <button className='buy-btn'>buy now</button>
            </div>
        </div>
    );
};

export default ShopCard;