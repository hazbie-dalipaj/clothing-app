import React from 'react';
import './cart-item.scss';

const CartItem = ({item: {imageUrl, name, price, quantity}}) => (
    <div className='cart-item'>
        <img src={imageUrl} alt=''></img>
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>${price}x{quantity}</span>
        </div>
    </div>
)
export default CartItem;