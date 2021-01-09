import React from 'react';
import {  VendorContainer } from './vendor-two.styles';
import VendorCategories from '../vendor-browse/vendor-browse.component';


class VendorsTwo extends React.Component  {
    constructor() {
        super();
        
        this.state = {
        categories: [{
                
            title: 'Kfc Spintex',
            imageUrl: 'https://food.jumia.com/assets/img/foods/burger.png',
            id: 1,
            description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
            price: 3000
        },
        {
            title: 'Jumia party drinks',
            imageUrl: 'https://netstorage-legit.akamaized.net/images/e97673f027aef175.jpg',
            id: 2,
            description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
            price: 2000
        },
        {
            title: 'Barcelos',
            imageUrl: 'http://earthfinds.co.ug/media/k2/items/cache/d8c427c7dd6445d50d9342ac3fcef82e_XL.jpg',
            id: 3,
            description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
            price: 3500
        },
        {
            title: 'Pizza inn',
            imageUrl: 'https://food.jumia.ug/blog/wp-content/uploads/2018/12/sushi-650x400.jpg',
            id: 4,
            description: 'Some good gist about this brand is as follows..., I\'ll tell tou the entire story at a later date',
            price: 4000
        },
        {
            title: 'carbo corso',
            imageUrl: 'https://food.jumia.ug/blog/wp-content/uploads/2018/12/sushi-650x400.jpg',
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
             
          <div className='categories-items'>
           
              <div className='preview'>
              	
              {
                  this.state.categories.filter(({ id}) => id < 5).map(({title, imageUrl, price, id}) => (
                      <VendorCategories key={id} title={title} imageUrl={imageUrl} price={price} />
                  ))
              }
          </div>
          </div>
          </VendorContainer>
      )
  }
    }
	
 


export default VendorsTwo;