import React from 'react';
import {  WineContainer } from './wine-vendor-two.styles';
import VendorCategories from '../vendor-browse/vendor-browse.component';

class WineVendorTwo extends React.Component  {
    constructor() {
        super();
        
        this.state = {
        categories: [{
                
            title: 'Match Maker',
            imageUrl: 'https://images.vat19.com/wobbling-whiskey-glasses/wobbling-whiskey-glasses-table.jpg',
            id: 1,
            description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
            price: 3000
        },
        {
            title: 'Elijah Craig',
            imageUrl: 'https://differencecamp.com/wp-content/uploads/2017/04/scotch-vs-whiskey.jpg',
            id: 2,
            description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
            price: 2000
        },
        {
            title: 'Jack Daniels',
            imageUrl: 'http://www.hdwallpaperslife.com/wp-content/uploads/2018/01/jack_daniels_whiskey_glass_drink_alcohol_93870_1920x1080.jpg',
            id: 3,
            description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
            price: 3500
        },
        {
            title: 'McDonald',
            imageUrl: 'https://thewhiskeywash.com/wp-content/uploads/2018/12/hockey-whisky.jpg',
            id: 4,
            description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
            price: 4000
        },
        {
            title: 'carbo corso',
            imageUrl: 'https://www.barnorama.com/wp-content/images/2015/04/different_types_of_whiskey/07-different_types_of_whiskey.jpg',
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
          <WineContainer>
             
          <div className='categories-items'>
           
              <div className='preview'>
              	
              {
                  this.state.categories.filter(({ id}) => id < 5).map(({title, imageUrl, price, id}) => (
                      <VendorCategories key={id} title={title} imageUrl={imageUrl} price={price} />
                  ))
              }
          </div>
          </div>
          </WineContainer>
      )
  }
    }
	
 


export default WineVendorTwo;