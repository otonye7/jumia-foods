import React from 'react';
import {Link} from 'react-router-dom';
import { SubHeaderContainer} from './subheader.styles';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import Cart from '../cart-dropdown/cart-dropdown.component';

const SubHeader = ({hidden}) => {
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
              <CartIcon />
         </div>
         <div className='cart-dropdown'>
             {
              hidden ? null :
              <Cart />   
             }    
         </div>
          
         </div>
        
     </SubHeaderContainer>  
   
    )

    };

const mapStateProps = ({cart: {hidden}}) => ({
        hidden
})

export default connect(mapStateProps)(SubHeader);