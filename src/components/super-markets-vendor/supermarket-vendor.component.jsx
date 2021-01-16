import React from 'react';
import {  SuperMarketsContainer } from './supermarket-vendor.styles';
import BrowseCategories from '../browse-categories/browse-categories.component';
import SUPERMARKET_DATA from '../food/supermarket.data';

class SuperMarketsVendor extends React.Component  {
    constructor() {
        super();
        
        this.state = {
        categories: SUPERMARKET_DATA
        
    }

}



  render() {
      const {categories} = this.state;
      return (
          <SuperMarketsContainer>
              <div className='heading'>
                  <h2>Vendors</h2>
              </div>

            
          <div className='categories-items'>
           
              <div className='preview'>
              	
              {
                  categories.filter((category, id) => id < 4).map((category) => (
                    <BrowseCategories key={category.id}  category={category} />
                  ))
              }
          </div>
          </div>
          </SuperMarketsContainer>
      )
  }
    }
	
 


export default SuperMarketsVendor;