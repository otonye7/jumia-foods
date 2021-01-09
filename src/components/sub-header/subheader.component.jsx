import React from 'react';
import {Link} from 'react-router-dom';
import { SubHeaderContainer} from './subheader.styles';



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
              
         </div>
         </div>
         

        
     </SubHeaderContainer>
       
   
    )

    
    };

export default SubHeader;