import React from 'react';
import { MenuItemContainer} from './menu-items.styles';
import {withRouter} from 'react-router-dom';

const MenuItems = ({title, imageUrl, price, rating, side, match, history, linkUrl}) => (
    
    <MenuItemContainer>
    <div className='menu-items' onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <div className='background-image' style = {{
        backgroundImage: `url(${imageUrl})`
    }} >

    </div>  
    </div>

    <div className='content'>
            <span className='title'>{title}</span>
            <div className='other'>
              <span className='price'>${price}</span>  
              <span className='price'>{rating}</span>
              <span className='price'>{side}</span>
            </div>
            
        </div>
    </MenuItemContainer>
    
);

export default withRouter(MenuItems);