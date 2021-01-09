import React from 'react';
import { BrowseContainer} from './browse-categories.styles';
import {withRouter} from 'react-router-dom';


const BrowseCategories = ({title, imageUrl, price}) => (
    
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
    <button className='cart-button'>Add To Cart</button>
    </BrowseContainer>
    
);

export default withRouter(BrowseCategories);