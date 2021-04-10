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
    <div className='sub'>
       <span className='title'>{title}</span> 
       <div className='par'>
       <span className='extra'>{pieces}</span>
       <span className='extra'>{extra}</span> 
       <span className='extra'>{drinks}</span>
       </div> 
     </div>
     <div className='others'>
          <div className='add-icon'>
              <span className='price'>${price}</span>
              <div className='add-border'>
                <AddIcon className='add'/> 
              </div>
          </div>
  </div>
  </div>

    </MenuItemContainer>
    
);

export default CollectionItems;