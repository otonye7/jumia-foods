import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton  = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HcI1yLJTPkBIuj37YATa3e1cOTM0UzSvsjBgTfn4nSPSB4GIjB3CM9X1EF1xta80V6xX22bnuGm6BBpF0hKMNq7007v80YLm4';
    
    const onToken = token => {
        console.log(token);
        alert('Payment Succesful')
    }
    return (
        <StripeCheckout 
           label='Pay Now'
           name='Same Old Foods'
           billingAddress
           shippingAddress
           image='https://www.toonpool.com/user/5807/files/the_same_old_shit_702885.jpg'
           description={`Your total is #{price}`}
           amount={priceForStripe}
           panelLabel='Pay Now'
           token={onToken}
           stripeKey={publishableKey}
        />
    )

};

export default StripeCheckoutButton;