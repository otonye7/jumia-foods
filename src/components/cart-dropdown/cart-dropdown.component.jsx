import React from 'react';

import {  CartDropDownContainer } from './cart-dropdown.styles';

const Cart = () => (
    <CartDropDownContainer>
        <div className='cart-dropdown'>
            <div className='cart-items' />
            <button className='button'>GO TO CHECKOUT</button>
        </div>
    </CartDropDownContainer>
);

export default Cart;