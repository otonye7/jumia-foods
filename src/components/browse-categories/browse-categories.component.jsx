import React from 'react';
import { BrowseContainer} from './browse-categories.styles';

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
    
    </BrowseContainer>
    
);

export default BrowseCategories;