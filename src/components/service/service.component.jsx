import React from 'react';
import { ServiceContainer} from './service.styles';
import Burger from  '../../assets/hamburger.svg';
import Diet from  '../../assets/diet.svg';
import Chef from  '../../assets/cake.svg';
import Pharmacy from  '../../assets/pharmacy-shop.png';
import  { Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

const Service = () => {
    return (
        <ServiceContainer>
           
           <div className='container'>
              <div className='services-text'>
                    <h3 className='choose'>Choose a service</h3>
              </div>

           </div>
           
           <div className='card-container'>

        <div className='card-1' >
           <img  src={Burger} alt="" />
           <div className='card-1-container'>
               <Link to='/resturant' className='resturant'>Resturant</Link>
               <p className='res-para'>All the food you love, from restaurants near you</p>
           </div>   
           </div>

            <div className='card-2'>
           <img  src={Diet} alt="" />
           <div className='card-2-container'>
               <Link to='/wine' className='wine'>Wine</Link>
               <p className='wine-para'>All the drinks you love and more</p>
           </div>
               
           </div>

           <div className='card-3'>
           <img  src={Chef} alt="" />
           <div className='card-3-container'>
               <Link to='/supermarkets' className='supermarkets'>Supermarkets</Link>
               <p className='wine-para'>Fresh grocies and everyday supermarkets</p>
           </div>  
           </div>

          </div>

          <div className='down-card'>
              
           <div className='card-4'>
           <img  src={Pharmacy} alt="" />
           <div className='card-4-container'>
               <Link to='/pharmacy' className='pharmacy'>Pharmacy</Link>
               <p className='pharmacy-para'>Genuine medication and personal care from licensed pharmacies</p>
           </div>  
           </div>
           
           

           
           </div>

        </ServiceContainer>
    )
};


export default withRouter(Service);