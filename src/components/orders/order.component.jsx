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
                    <h3 className='para'>The Jumia Food app makes it simple for anybody to use a mobile device to look over the menu of the best vendors and place an order for home delivery.</h3>
                </div>

                <div className='c-buttons'>
                    <button>Download on Apple</button>
                    <button>Download on Google Play</button>
                </div>
            </div>
        </OrderContainer>
    )
};


export default Order;