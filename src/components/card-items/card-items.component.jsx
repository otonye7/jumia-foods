import React from 'react';
import { MenuItemContainer} from './card-items.styles';

const CardItems = ({title, price, rating, minimum, delivery}) => (
    
    <MenuItemContainer>

    <div className='content'>
            <span className='title'>{title}</span>
            <br />
            <div className='other'>
              <span className='price'>${price}</span>  
              <span className='price'>{rating}</span>
              <span className='price'>{minimum}</span>
              <span className='price'>{delivery}</span>
            </div>
            
        </div>
    </MenuItemContainer>
    
);

export default CardItems;