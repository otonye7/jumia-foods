import React from 'react';
import { LogoContainer} from './logo.styles';
import FD from  '../../assets/fd.png';

const Logo = () => {
    return(
     <LogoContainer>
         <div className='logo-icon'>
             <img src={FD} alt=""/>
         </div>
     </LogoContainer>
       
   
    )

    
    };

export default Logo;