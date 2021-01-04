import React from 'react';
import {  WineContainer } from './wine-vendor.styles';
import VendorCategories from '../vendor-browse/vendor-browse.component';

class WineVendor extends React.Component  {
    constructor() {
        super();
        
        this.state = {
        categories: [{
                
            title: 'Kfc',
            imageUrl: 'http://prod.static9.net.au/_/media/2018/07/03/11/02/kfc-fin-cut.jpg',
            id: 1,
            description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
            price: 3000
        },
        {
            title: 'Waf cream',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_(cropped).jpg/1200px-Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_(cropped).jpg',
            id: 2,
            description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
            price: 2000
        },
        {
            title: 'Cone Flakes',
            imageUrl: 'https://www.julieseatsandtreats.com/wp-content/uploads/2020/06/Rainbow-Ice-Cream-14-of-16.jpg',
            id: 3,
            description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
            price: 3500
        },
        {
            title: 'Bukka Hut',
            imageUrl: 'https://bukkahut.com/wp-content/uploads/2015/12/DSC_1135.jpg',
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
          <WineContainer>
              <div className='heading'>
                  <h2>Vendors</h2>
              </div>

            
          <div className='categories-items'>
           
              <div className='preview'>
              	
              {
                  this.state.categories.filter(({ id}) => id > 5).map(({title, imageUrl, price, id}) => (
                      <VendorCategories key={id} title={title} imageUrl={imageUrl} price={price} />
                  ))
              }
          </div>
          </div>
          </WineContainer>
      )
  }
    }
	
 


export default WineVendor;