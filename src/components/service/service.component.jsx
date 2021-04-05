import React from 'react';
import { ServiceContainer} from './service.styles';
import Burger from  '../../assets/hamburger.svg';
import Diet from  '../../assets/diet.svg';
import Chef from  '../../assets/drink.jpg';
import  { Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

const Service = () => {
    return (
        <ServiceContainer>
        
            <div className="card">
                <br />
                <img src={Burger} alt="Avatar"  />
                <br />
             <div className="container">
                <Link className='card-title'>Resturant</Link>
                <span className='card-text'>All the food you love, from resturants near you</span>
             </div>
            </div>
            
            <div className="card">
                <br />
                <img src={Diet} alt="Avatar"  />
                <br />
             <div className="container">
                <Link className='card-title'>Food Festival</Link>
                <span className='card-text'>Up to 50% off. Flash Sales and amazing discounts</span>
             </div>
            </div>

            
            <div className="card">
                <br />
                <img src={Chef} alt="Avatar"  />
                <br />
             <div className="container">
                <Link className='card-title'>Jumia Drinks</Link>
                <span className='card-text'>All drinks you love and more</span>
             </div>
            </div>
            
                  {/* <div className='text'>
                     <h6 className='resturant'>Resturant</h6>
                      <h6>All the foods you love from resturants near you</h6> 
                  </div> */}

          
           
           {/* <div className='card-container'>

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
           
           

           
           </div> */}

        </ServiceContainer>
    )
};


export default withRouter(Service);