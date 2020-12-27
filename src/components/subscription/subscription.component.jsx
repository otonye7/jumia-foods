import React from 'react';

import { SubscriptionContainer} from './subscription.styles';

const Subscription = () => {
    return (
        <SubscriptionContainer>
            <div className = 'overall'>

           <div className='container'>
               <h1 className='subscribe'>Subscribe to our newsletter today!</h1>
           </div>
           <div className='paragraph'>
                <span>Don't miss out on our great offers and Receive deals from all our top vendors via e-mail</span>
           </div>
           
           <br />

           <div className='sort'>
                   <select className='select'>
                    <option value='latest'>Select your city</option>
                    <option value='lagos'>Lagos</option>
                    <option value='abuja'>Abuja</option>
                   </select>

                 <div className='text-a'>
                     <input  className='text-a' label='email'  name="email" id="email" />
                </div>

                <div className='c-buttons'>
                    <button>Subscribe Newsletter</button>
                </div>   
               </div>


               </div>
        </SubscriptionContainer>
    )
};


export default Subscription;