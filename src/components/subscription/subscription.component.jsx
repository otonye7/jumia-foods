import React from 'react';

import { SubscriptionContainer} from './subscription.styles';

const Subscription = () => {
    return (
        <SubscriptionContainer>
            <div className='container'>
                <h2 className='subscribe-text'>Subscribe to our newsletter today!</h2>
                <span className='subscribe-description'>Don't miss out on our great offers and Receive deals from all our top vendors via e-mail</span>
            </div>
            <br />
            <div className='sub-container'>
            <div className='sort'>
                   <select className='selectone'>
                    <option value='latest'>Select your city</option>
                    <option value='lagos'>Lagos</option>
                    <option value='abuja'>Abuja</option>
                   </select>
            </div>

            <div className="form-container">
            <form className='form'>
                <input type="text" id="fname" className="firstname" placeholder="Email" />
             </form>
           </div>
         </div>
            {/* <div className = 'overall'>
           
           <div className='subscribe-container'>
           <div className='container'>
               <h1 className='subscribe'>Subscribe to our newsletter today!</h1>
               <span className='text'>Don't miss out on our great offers and Receive deals from all our top vendors via e-mail</span>
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

                <div className='subscribe-button'>
                    
                </div>
            </div>


                 
               </div>


               </div> */}
        </SubscriptionContainer>
    )
};


export default Subscription;