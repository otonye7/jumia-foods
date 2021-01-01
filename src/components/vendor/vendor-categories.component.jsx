import React from 'react';
import {  VendorContainer } from './vendor-categories.styles';
import VendorCategories from '../vendor-browse/vendor-browse.component';

class Vendors extends React.Component  {
    constructor() {
        super();
        
        this.state = {
        categories: [{
                
            title: 'Kfc Spintex',
            imageUrl: 'https://blog.jumia.com.ng/wp-content/uploads/2016/10/Nkwobi.jpg',
            id: 1,
            description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
            price: 3000
        },
        {
            title: 'Jumia party drinks',
            imageUrl: 'https://food.jumia.ma/blog/wp-content/uploads/2020/01/Capture-594x400.png',
            id: 2,
            description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
            price: 2000
        },
        {
            title: 'Barcelos',
            imageUrl: 'https://i2.wp.com/techmoran.com/wp-content/uploads/2015/01/food-05.jpg?resize=795%2C385&ssl=1',
            id: 3,
            description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
            price: 3500
        },
        {
            title: 'Pizza inn',
            imageUrl: 'https://food.jumia.com.gh/blog/wp-content/uploads/2019/02/spaghetti-aragosta-633x400.jpg',
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
            title: 'chicken inn',
            imageUrl: 'https://food.jumia.com.gh/images/jumia-for-corporate.jpg',
            id: 6,
            description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
            price: 3000
        },
        {
            title: 'Artist pizza',
            imageUrl: 'https://startupafrica.co.za/wp-content/uploads/2020/10/kenya-food.jpg',
            id: 7,
            description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
            price: 6000
        },
        {
            title: 'Vida e cafe',
            imageUrl: 'https://food.jumia.ma/blog/wp-content/uploads/2020/01/Capture-594x400.png',
            id: 8,
            description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
            price: 3900
        },
        {
            title: 'Halal',
            imageUrl: 'https://www.groundzeroweb.com/wp-content/uploads/2016/09/Amazing-Food-Pictures-9.jpg',
            id: 9,
            description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
            price: 4500
        }]
        
    }

}



  render() {
      return (
          <VendorContainer>
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
          </VendorContainer>
      )
  }
    }
	
 


export default Vendors;