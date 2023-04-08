import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ShopCard from '../ShopCard/ShopCard';
import './Shop.css'
import Cart from '../Cart/Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Shop = () => {
    const shopData = useLoaderData();
    const [cart, getCart] = useState([]);


    const buyHeandler = (shirt) => {
        const exist = cart.find(ts => ts._id === shirt._id);
        if (exist) {
           toast('aldedy exist')
        } else {
            const newCart = [...cart, shirt];
            getCart(newCart);
        }


    };

    const removeHeandler = (id) => {
        const ggh = cart.filter(sd => sd._id !== id);
        console.log(ggh);
        getCart(ggh);

    }

    return (

        <div className='container'>
        
            <div className='card-container1'>
                {
                    shopData.map(shop => <ShopCard
                        key={shop._id}
                        shop={shop}
                        buyHeandler={buyHeandler}
                    ></ShopCard>)
                }
            </div>
            <div>
            <ToastContainer></ToastContainer>
                <Cart
                    cart={cart}
                    key={cart._id}
                    removeHeandler={removeHeandler}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;