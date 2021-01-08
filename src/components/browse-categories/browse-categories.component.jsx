import React from 'react';
import { BrowseContainer} from './browse-categories.styles';
import {withRouter} from 'react-router-dom';

const BrowseCategories = ({title, imageUrl, price, history, linkUrl, match}) => (
    
    <BrowseContainer>
    <div className='menu-items' onClick={() => history.push(`${match.url}/:${linkUrl}`)}>
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

export default withRouter(BrowseCategories);