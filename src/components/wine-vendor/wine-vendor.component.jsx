import React from 'react';
import {  WineContainer } from './wine-vendor.styles';
import BrowseCategories from '../browse-categories/browse-categories.component';
import WINE_DATA from '../food/wine.data.jsx';

class WineVendor extends React.Component  {
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
              <div className='heading'>
                  <h2>Vendors</h2>
              </div>

            
          <div className='categories-items'>
           
              <div className='preview'>
              	
              {
                  categories.filter((category, id) => id < 4 ).map((category) => (
                    <BrowseCategories key={category.id}  category={category} />
                  ))
              }
          </div>
          </div>
          </WineContainer>
      )
  }
    }
	
 


export default WineVendor;