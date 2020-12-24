import React from 'react';
import { DirectionsContainer} from './directions.styles';
import Location from  '../../assets/location.jpg';
import Phone from  '../../assets/phone.jpg';
import Bike from  '../../assets/bike.jpg';

const Directions = () => {
    return (
        <DirectionsContainer>
        <div className='container'>
        <div className='text-container'>
           <h1 className='text'>How it Works</h1>
        </div>
       </div>

       <div className='overall'>
           
       <div className='image-container'>
           <div className='location'>
               <img  src={Location} alt="" /> 
           </div>
            <div className='loc-text'>
                <h2>Set delivery location</h2>
                <span>Select the location where you want us to deliver</span>
            </div>
        </div>

        <div className='image-2-container'>
            <div className='phone'>
             <img  src={Phone} alt="" />   
            </div>
            <div className='loc-text'>
                <h2>Choose the product</h2>
                <span>Browse shops that deliver near you</span>
            </div>
        </div>

        <div className='image-3-container'>
            <div className='bike'>
             <img  src={Bike} alt="" />   
            </div>
            <div className='loc-text'>
                <h2>Receive it at your doorstep</h2>
                <span>Your order will be delivered to you in no time</span>
            </div>
        </div>


        

            
</div>

        </DirectionsContainer>
    )
};


export default Directions;