import React from 'react';
import { FooterContainer} from './footer.styles';

const Footer = () => {
    return (
        <FooterContainer>
            <div className='footer-container'>
           <div className='container'>
               <div className='city'>
                   <h2 className='title'>City</h2>
               </div>
               <div className='list'>
                   <span>Lagos</span>
               </div>
               <div className='list'>
                   <span>Abuja</span>
               </div>
           </div>

           <div className='cuisine-container'>
               <div className='cuisine'>
                   <h2 className='title'>Cuisines</h2>
               </div>
               <div className='list'>
                   <span>Pizza in Lekki</span>
               </div>
               <div className='list'>
                   <span>Chinese Food in Maitama</span>
               </div>
               <div className='list'>
                   <span>Thai Food in Berger Abuja</span>
               </div>
               <div className='list'>
                   <span>Thai Food in Berger Lagos</span>
               </div>
               <div className='list'>
                   <span>Sandwiches in Ajah</span>
               </div>
               <div className='list'>
                   <span>Sandwiches in Wuse</span>
               </div>
               <div className='list'>
                   <span>Seafood in Victoria Island</span>
               </div>
               <div className='list'>
                   <span>African Food in Ikeja</span>
               </div>
               </div>

               <div className='vendors-container'>
               <div className='vendors'>
                   <h2 className='title'>Popular Vendors</h2>
               </div>
               <div className='list'>
                   <span>KFC Delivery</span>
               </div>
               <div className='list'>
                   <span>Eddys Pizza</span>
               </div>
               <div className='list'>
                   <span>Noble House Chinese</span>
               </div>
               <div className='list'>
                   <span>Baritas</span>
               </div>
               <div className='list'>
                   <span>Nourish Lab smoothies</span>
               </div>
               <div className='list'>
                   <span>Pinocchio</span>
               </div>
               <div className='list'>
                   <span>Honeysuckle</span>
               </div>
               <div className='list'>
                   <span>Nyonyo</span>
               </div>
           </div>

           <div className='jumia-container'>
               <div className='jumia'>
                   <h2 className='title'>S^MO Food</h2>
               </div>
               <div className='list'>
                   <span>About</span>
               </div>
               <div className='list'>
                   <span>Press</span>
               </div>
               <div className='list'>
                   <span>Contact</span>
               </div>
               <div className='list'>
                   <span>Terms and Conditions</span>
               </div>
               <div className='list'>
                   <span>Privacy Policy</span>
               </div>
               <div className='list'>
                   <span>Join Us</span>
               </div>
               <div className='list'>
                   <span>Become a rider!</span>
               </div>

           </div>

           <div className='contact'>
               <h6>Contact Us</h6>
               <span>otonyeamie@gmail.com</span>
           </div>
           </div>

           <div className='samo-foods'>
               <h6>© Copyright 2021 S^mo Food is a registered trademark</h6>
           </div>
        </FooterContainer>
    )
};

export default Footer;