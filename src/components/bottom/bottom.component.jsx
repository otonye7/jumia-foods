import React from 'react';
import { ResturantContainer} from './bottom.styles';




const Bottom = () => {

    return (
        <ResturantContainer>
           <div className='container'>
               <h3 className='terms'>
                   Terms and Conditions. Private Policy
               </h3>
           </div>

           <div className='bottom-container'>
               <h3 className='terms'>© Copyright 2021 S^mo Food is not a registered trademark</h3>
           </div>
        </ResturantContainer>
    )
};


export default Bottom;