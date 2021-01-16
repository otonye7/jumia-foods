import React from 'react';
import {  WineContainer } from './wine-vendor-two.styles';
import BrowseCategories from '../browse-categories/browse-categories.component';
import WINE_DATA from '../food/wine.data';

class WineVendorTwo extends React.Component  {
    constructor() {
        super();
        
        this.state = {
        categories: WINE_DATA
        
    }

}



  render() {
      const {categories} = this.state;
      return (
          <WineContainer>
             
          <div className='categories-items'>
           
              <div className='preview'>
              	
              {
                  categories.filter((category, id) => id > 4).map((category) => (
                    <BrowseCategories key={category.id}  category={category} />
                  ))
              }
          </div>
          </div>
          </WineContainer>
      )
  }
    }
	
 


export default WineVendorTwo;