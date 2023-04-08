import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import './Cart.css'



const Cart = ({ cart, removeHeandler }) => {
    console.log(cart);
    return (
        <div>
            <h1>cart length: {cart.length}</h1>
            {
                cart.length>2 ?<h1>GoodJob</h1>:<h1>add more <small>(add 3 product)</small> </h1>
            }
            {
                cart.map(tshirt => <p key={tshirt._id} className={`p-t{cart.length ===1 ? "red":"blue"}`}>
                    {tshirt.name}
                    <button onClick={() => removeHeandler(tshirt._id)} className='x-btn'><XMarkIcon className='x-mark' /></button>

                </p>)
            }
        </div>
    );
};

export default Cart;