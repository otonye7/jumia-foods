import React from 'react';
import { MenuItemContainer} from './collection-item.styles';
import AddIcon from '@material-ui/icons/Add';


const CollectionItems = ({title, imageUrl, pieces, drinks, extra, price}) => (
    
    <MenuItemContainer>
    <div className='menu-items'>
      <div className='background-image' style = {{
        backgroundImage: `url(${imageUrl})`
    }} >

    </div>  
  </div>

  <div className='contents'>
      <span className='title'>{title}</span>
      <div className='sub-contents'>
      <span className='pieces'>{pieces}</span>
      <span className='extra'>{extra}</span>
      <span className='extra'>{drinks}</span>
      </div>
  </div>

  <div className='icon'>
     <span className='price'>${price}</span>
     <AddIcon />
  </div>

    </MenuItemContainer>
    
);

export default CollectionItems;