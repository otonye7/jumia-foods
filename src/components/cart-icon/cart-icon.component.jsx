import React from 'react';
import {ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import {  CartIconContainer } from './cart-icon.styles';

const CartIcon  = () => (
    <CartIconContainer>
    <div className='cart-icon'>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
    </CartIconContainer>
);

export default CartIcon;
