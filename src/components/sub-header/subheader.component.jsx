import React from 'react';
import {Link} from 'react-router-dom';
import { SubHeaderContainer} from './subheader.styles';

import CustomButton from '../custom-button/custom-button.component';

const SubHeader = () => {
    return(
     <SubHeaderContainer>
         <Link className='logo'>
            
         </Link>
         
         <div className='nav-container'>
             <div className='navbar'>
             <Link className='nav-options'>
                 Help
             </Link>
         </div>

         <div className='buttons'>
              <CustomButton>Login</CustomButton>
         </div>
         </div>
         

        
     </SubHeaderContainer>
       
   
    )

    
    };

export default SubHeader;