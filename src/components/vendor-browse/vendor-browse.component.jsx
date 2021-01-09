import React from 'react';
import { BrowseContainer} from './vendor-browse.styles';


const VendorCategories  = ({title, imageUrl, price}) => (
    <BrowseContainer>
       <div className='vendor-items'>
           <div className='image' style = {{
               backgroundImage: `url(${imageUrl})`
           }} >

           </div>
       </div>

       <div className='content'>
           <span className='title'>{title}</span>
           <span className='price'>{price}</span>
       </div>
       <button className='cart-button'>ADD TO CART</button>
    </BrowseContainer>
);

export default VendorCategories ;