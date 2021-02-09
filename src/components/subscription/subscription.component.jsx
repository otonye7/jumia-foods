import React from 'react';

import { SubscriptionContainer} from './subscription.styles';

const Subscription = () => {
    return (
        <SubscriptionContainer>
            <div className = 'overall'>
           
           <div className='subscribe-container'>
           <div className='container'>
               <h1 className='subscribe'>Subscribe to our newsletter today!</h1>
           </div>
           <div className='paragraph'>
                <span>Don't miss out on our great offers and Receive deals from all our top vendors via e-mail</span>
           </div>
           </div>
           <br />

           <div className='sort'>
               <div className='city-container'>
                   <select className='select'>
                    <option value='latest'>Select your city</option>
                    <option value='lagos'>Lagos</option>
                    <option value='abuja'>Abuja</option>
                   </select>
                </div>


                <div className='c-buttons'>
                    <div className='subscribe-button'>
                    <button>Subscribe Newsletter</button>
                    </div>
                </div>   
               </div>


               </div>
        </SubscriptionContainer>
    )
};


export default Subscription;