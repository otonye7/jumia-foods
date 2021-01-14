import React from 'react';
import {connect} from 'react-redux';
import {clearItemFromCart, addItem, removeItem} from '../../redux/cart/cart.action';
import {  CheckoutContainer } from './checkout-item.styles';

const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {
    const {title, imageUrl, price, quantity} = cartItem
    return (
    <CheckoutContainer>
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='category'/>
        </div>
        <span className='name'>{title}</span>
        <span className='quantity'>
        <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
            <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
        </span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={() => clearItem(cartItem)}>
            &#10005;
        </div>
    </div>
    </CheckoutContainer>
)};

const mapDispatchToProps = dispatch => ({
    clearItem: category => dispatch(clearItemFromCart(category)),
    addItem: category => dispatch(addItem(category)),
    removeItem: category => dispatch(removeItem(category))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);