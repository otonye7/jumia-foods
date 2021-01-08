import React from 'react';
import { BrowseContainer} from './menu-items.styles';
import {withRouter} from 'react-router-dom';

const MenuItems = ({title, imageUrl, price}) => (
    
    <BrowseContainer>
    <div className='menu-items' >
      <div className='background-image' style = {{
        backgroundImage: `url(${imageUrl})`
    }} >

    </div>  
    </div>

    <div className='content'>
            <span className='title'>{title}</span>
            <span className='price'>{price}</span>
        </div>
        <button className='add-button'>Add To Cart</button>
    </BrowseContainer>
    
);

export default withRouter(MenuItems);