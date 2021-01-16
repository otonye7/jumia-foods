import React from 'react';
import Header from '../../components/header/header.component';
import SubHeader from '../../components/sub-header/subheader.component';
import ResturantFilter from '../../components/resturant-filter/resturant-filter.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selector';
import {  CheckoutContainer } from './checkout.styles';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = ({cartItems, total}) => (
    <CheckoutContainer>
        <div>
           <Header />
            <SubHeader /> 
            <ResturantFilter />
        </div>

        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div> 
                <div className='header-block'>
                    <span>Remove</span>
                </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
            </div>
            {
                cartItems.map(cartItem => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                ))
            }
            
            <div className='total'>
                Total: #{total}
            </div>
            <div className='test-warning'>
                Please use the following test credit card for payment
                <br />
                4242 4242 4242 4242 exp-date: 01/21 - cvv 123
                for the month use the current month e.g if we are in 
                march use 03 /21, febuary 02/21
            </div>
          <StripeCheckoutButton price={total}/>  
        </div>
        
    </CheckoutContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);