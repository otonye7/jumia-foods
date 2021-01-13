import React from 'react';
import {connect} from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import {  CartDropDownContainer } from './cart-dropdown.styles';

const CartDropDown = ({cartItems}) => (
    <CartDropDownContainer>
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.map(cartItem => <CartItem key={cartItem.id} category={cartItem}/>)
                }
            </div>
            <button className='button'>GO TO CHECKOUT</button>
        </div>
    </CartDropDownContainer>
);

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropDown);