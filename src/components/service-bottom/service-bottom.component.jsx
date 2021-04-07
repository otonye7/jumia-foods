import React from 'react';
import { ServiceContainer} from './service-bottom.styles';
import Pharmacy from  '../../assets/pharmacy-shop.png';
import Drugs from  '../../assets/drugs.jpg';
import Shopping from  '../../assets/shopping.svg.png';
import  { Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

const ServiceBottom = () => {
    return (
        <ServiceContainer>
        
            <div className="card">
                <br />
                <img src={Pharmacy} alt="Avatar"  />
                <br />
             <div className="container">
                <Link to='/supermarkets' className='card-title'>Supermarket</Link>
                <span className='card-text'>Fresh grocies and everyday essential</span>
             </div>
            </div>
            
            <div className="card">
                <br />
               <img src={Drugs} alt="Avatar"  /> 
                <br />
             <div className="container">
                <Link to='./pharmacy' className='card-title'>Pharmacy</Link>
                <span className='card-text'>Geniune medication and personal care from licensed pharmacies</span>
             </div>
            </div>

            
            <div className="card">
                <br />
                 <img src={Shopping} alt="Avatar"  /> 
                <br />
             <div className="container">
                <Link className='card-title'>Shopping</Link>
                <span className='card-text'>Gifts, electronic, airtime and more</span>
             </div>
            </div>
            
        </ServiceContainer>
    )
};


export default withRouter(ServiceBottom);