import React from 'react';
import {Link} from 'react-router-dom';
import { SubHeaderContainer} from './subheader.styles';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import Cart from '../cart-dropdown/cart-dropdown.component';

const SubHeader = ({hidden}) => {
    return(
     <SubHeaderContainer>
         <div className='container'>
             <div className='title'>
                 <Link className='title-link'>S^MO FOODS</Link>
             </div>

             <div className='cart-container'>
                 <Link className='help-text'>Help</Link>

            <div className='cart-icon'>
                 <CartIcon />
             </div>
         <div className='cart-dropdown'>
             {
              hidden ? null :
              <Cart />   
             }    
         </div>
       </div>
    </div>
     </SubHeaderContainer>  
   
    )

    };

const mapStateProps = ({cart: {hidden}}) => ({
        hidden
})

export default connect(mapStateProps)(SubHeader);