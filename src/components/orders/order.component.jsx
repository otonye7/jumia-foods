import React from 'react';

import { OrderContainer} from './order.styles';

const Order = () => {
    return (
        <OrderContainer>
            <div className='container'>
                <div className='order-text'>
                    <h1>Order Food</h1>
                </div>

                <div className='paragraph'>
                    <h3 className='para'>The Samo Food app makes it simple for anybody to use a mobile device to look over the menu of the best vendors and place an order for home delivery.</h3>
                </div>
                </div>

                <div className='overall-button'>
                <div className='c-buttons'>
                    <button className='download'>Download on Apple</button>
                    <button className='play'>Download on Google Play</button>
                </div>
                
            </div>
        </OrderContainer>
    )
};


export default Order;