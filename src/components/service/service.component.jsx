import React from 'react';
import { ServiceContainer} from './service.styles';
import Burger from  '../../assets/hamburger.svg';

const Service = () => {
    return (
        <ServiceContainer>
           
           <div className='container'>
              <div className='services-text'>
                    <h3 className='choose'>Choose a service</h3>
              </div>

           </div>

           <div className='card'>
           <img  src={Burger} alt="" />
           <div className='card-container'>
               <h3>Resturant</h3>
               <p>All the food you love, from restaurants near you</p>
           </div>
               
           </div>

        </ServiceContainer>
    )
};


export default Service;