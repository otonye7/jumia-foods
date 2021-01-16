import React from 'react';
import {  PharmacyContainer } from './pharmacy-vendor.styles';
import PHARMACY_DATA from '../food/pharmacy.data';
import BrowseCategories from '../browse-categories/browse-categories.component';

class PharmacyVendor extends React.Component  {
    constructor() {
        super();
        
        this.state = {
        categories: PHARMACY_DATA
        
    }

}



  render() {
    const {categories} = this.state;
      return (
          <PharmacyContainer>
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
          </PharmacyContainer>
      )
  }
    }
	
 


export default PharmacyVendor;