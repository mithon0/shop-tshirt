import React from 'react';
import './ShopCard.css';
const ShopCard = ({shop,buyHeandler}) => {
    
    const {picture,name,gender,price,_id
    }=shop;
    return (
        <div className='card-container'>
            <div className='img-container'>
                <img className='shirt-img' src={picture} alt="" />
            </div>
            <div> 
                <h1>{name}</h1>
                <p>Gender: {gender}</p>
                <h3>Price: ${price}</h3>
                <button onClick={()=>buyHeandler(shop)} className='buy-btn'>buy now</button>
            </div>
        </div>
    );
};

export default ShopCard;