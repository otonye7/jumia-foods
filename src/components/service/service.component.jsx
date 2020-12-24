import React from 'react';
import { ServiceContainer} from './service.styles';
import Burger from  '../../assets/hamburger.svg';
import Diet from  '../../assets/diet.svg';
import Chef from  '../../assets/cake.svg';
import Shop from  '../../assets/add-shopping-cart.png';
import Pharmacy from  '../../assets/pharmacy-shop.png';

const Service = () => {
    return (
        <ServiceContainer>
           
           <div className='container'>
              <div className='services-text'>
                    <h3 className='choose'>Choose a service</h3>
              </div>

           </div>
           
           <div className='card-container'>

           <div className='card-1'>
           <img  src={Burger} alt="" />
           <div className='card-1-container'>
               <h3 className='resturant'>Resturant</h3>
               <p className='res-para'>All the food you love, from restaurants near you</p>
           </div>   
           </div>

            <div className='card-2'>
           <img  src={Diet} alt="" />
           <div className='card-2-container'>
               <h3 className='wine'>Wine</h3>
               <p className='wine-para'>All the drinks you love and more</p>
           </div>
               
           </div>

           <div className='card-3'>
           <img  src={Chef} alt="" />
           <div className='card-3-container'>
               <h3 className='wine'>Supermarkets</h3>
               <p className='wine-para'>Fresh grocies and everyday supermarkets</p>
           </div>  
           </div>

          </div>

          <div className='down-card'>
              
           <div className='card-4'>
           <img  src={Pharmacy} alt="" />
           <div className='card-4-container'>
               <h3 className='pharmacy'>Pharmacy</h3>
               <p className='pharmacy-para'>Genuine medication and personal care from licensed pharmacies</p>
           </div>  
           </div>
           
           

           <div className='card-5'>
           <img  src={Shop} alt="" />
           <div className='card-5-container'>
               <h3 className='shop'>Shopping</h3>
               <p className='shop-para'>Gift and electronic and more</p>
           </div>  
           </div>
           </div>

        </ServiceContainer>
    )
};


export default Service;