import React from 'react';
import {  CategoriesContainer } from './categories.styles';
import SecondMenuItem from '../second-menu-item/second-menu-item.component';
import FOOD_DATA from '../food/food.data.jsx';




class Categories extends React.Component  {
    constructor() {
        super();
        
        this.state = {
       categories: FOOD_DATA
    }

}

  render() {
      const {categories} = this.state;
      return (
          <CategoriesContainer>
              <div className='heading'>
                  <h2>New on Jumia</h2>
              </div>

            
          <div className='categories-items'>
           
              <div className='preview'>
              <div  className='arrow'>&#10094;</div>	
              {
                  categories.filter((category, id) => id < 4).map((category) => (
                      <SecondMenuItem key={category.id}  category={category} />
                  ))
              }
              <div className='arrow'>&#10095;</div>
          </div>
          </div>
          </CategoriesContainer>
      )
  }
    }
	
 


export default Categories;
