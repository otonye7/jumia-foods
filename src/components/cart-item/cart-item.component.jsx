import React from 'react';
import {  CartItemContainer } from './cart-item.styles';

const CartItem = ({category: {title, imageUrl, price, quantity}}) => (
    <CartItemContainer>
        <div className='cart-item'>
            <img src={imageUrl} alt='category'/>
            <div className='item-details'>
                <span className='name'>{title}</span>
                <span className='price'>{quantity} x #{price}</span>
            </div>
        </div>
    </CartItemContainer>
);

export default CartItem;