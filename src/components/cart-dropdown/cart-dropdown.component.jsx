import React from 'react';
import {connect} from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import {withRouter} from 'react-router-dom';
import {selectCartItems} from '../../redux/cart/cart.selector';
import {toggleCartHidden} from '../../redux/cart/cart.action.js';
import {  CartDropDownContainer } from './cart-dropdown.styles';

const CartDropDown = ({cartItems, history, dispatch}) => (
    <CartDropDownContainer>
        <div className='cart-dropdown'>
            <div className='cart-items'>
            {
                cartItems.length ?
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} category={cartItem} />
                    ))
                    :
                    <span className='empty-message'>Your Cart Is Empty</span>
            }
            </div>
            <button onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden())
            }} className='button'>GO TO CHECKOUT</button>
        </div>
    </CartDropDownContainer>
);

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropDown));