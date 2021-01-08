import React from 'react';
import {  PharmacyContainer } from './pharmacy-vendor.styles';
import VendorCategories from '../vendor-browse/vendor-browse.component';

class PharmacyVendor extends React.Component  {
    constructor() {
        super();
        
        this.state = {
        categories: [{
                
            title: 'Xd',
            imageUrl: 'http://d.ibtimes.co.uk/en/full/1619162/illicit-drugs.jpg',
            id: 1,
            description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
            price: 3000
        },
        {
            title: 'DX',
            imageUrl: 'https://img.medscape.com/thumbnail_library/is_170703_generic_drugs_800x600.jpg',
            id: 2,
            description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
            price: 2000
        },
        {
            title: 'Coloured',
            imageUrl: 'https://marketing-assets.avvo.com/uploads/sites/3/2015/09/synthetic-drugs_sized.jpg',
            id: 3,
            description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
            price: 3500
        },
        {
            title: 'Capsules',
            imageUrl: 'https://aforeverrecovery.com/wp-content/uploads/2017/06/skittles-party-drugs.jpg',
            id: 4,
            description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
            price: 4000
        },
        {
            title: 'carbo corso',
            imageUrl: 'https://food.jumia.com/assets/img/foods/burger.png',
            id: 5,
            description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
            price: 2500
        },
        {
            title: 'Scottish',
            imageUrl: 'https://hiltonhotel-berlin.secretbox.fr/cache/images/product/eccbc87e4b5ce2fe28308fd9f2a7baf3-dylan-de-jonge-705929-unsplash.jpg',
            id: 6,
            description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
            price: 3000
        },
        {
            title: 'Jim Bean',
            imageUrl: 'https://whiskeywatch.com/wp-content/uploads/2019/06/bourbon-whiskey.jpg',
            id: 7,
            description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
            price: 6000
        },
        {
            title: 'irish whiskey',
            imageUrl: 'https://www.masterofmalt.com/blog/wp-content/uploads/2017/10/Irish-Whiskey-FEAT.jpg',
            id: 8,
            description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
            price: 3900
        },
        {
            title: 'Cocktail',
            imageUrl: 'https://cpb-us-w2.wpmucdn.com/u.osu.edu/dist/4/2857/files/2018/03/drinks-at-the-bar-1lagh1u.jpg',
            id: 9,
            description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
            price: 4500
        }]
        
    }

}



  render() {
      return (
          <PharmacyContainer>
              <div className='heading'>
                  <h2>Vendors</h2>
              </div>

            
          <div className='categories-items'>
           
              <div className='preview'>
              	
              {
                  this.state.categories.filter(({ id}) => id < 5).map(({title, imageUrl, price, id}) => (
                      <VendorCategories key={id} title={title} imageUrl={imageUrl} price={price} />
                  ))
              }
          </div>
          </div>
          </PharmacyContainer>
      )
  }
    }
	
 


export default PharmacyVendor;