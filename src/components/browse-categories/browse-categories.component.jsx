import React from 'react';
import { BrowseContainer} from './browse-categories.styles';

import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.action';

const BrowseCategories = ({category, addItem}) => {
  const { title, price, imageUrl } = category;
   return (
  
    <BrowseContainer>
    <div className='menu-items'>
      <div className='background-image' style = {{
        backgroundImage: `url(${imageUrl})`
    }} >

    </div>  
    </div>

    <div className='content'>
            <span className='title'>{title}</span>
            <span className='price'>{price}</span> 
        </div>
    <button onClick={() => addItem(category)} className='cart-button'>Add To Cart</button>
    </BrowseContainer>
    
)};

const mapDispatchToProps = dispatch => ({
    addItem: category => dispatch(addItem(category))
})

export default connect(null, mapDispatchToProps)(BrowseCategories);