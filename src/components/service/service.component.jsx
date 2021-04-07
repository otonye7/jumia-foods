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
                <Link to='/resturant' className='card-title'>Resturant</Link>
                <span className='card-text'>All the food you love, from resturants near you</span>
             </div>
            </div>
            
            <div className="card">
                <br />
                <img src={Diet} alt="Avatar"  />
                <br />
             <div className="container">
                <Link to='/food' className='card-title'>Food Festival</Link>
                <span className='card-text'>Up to 50% off. Flash Sales and amazing discounts</span>
             </div>
            </div>

            
            <div className="card">
                <br />
                <img src={Chef} alt="Avatar"  />
                <br />
             <div className="container">
                <Link to='/wine' className='card-title'>Jumia Drinks</Link>
                <span className='card-text'>All drinks you love and more</span>
             </div>
            </div>

        </ServiceContainer>
    )
};


export default withRouter(Service);