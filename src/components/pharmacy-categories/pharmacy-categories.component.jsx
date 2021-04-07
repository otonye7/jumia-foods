import React from 'react';
import {  CategoriesContainer } from './pharmacy-categories.styles';





const  pharmacyCategories = ({sections}) => {

	return ( 
        <CategoriesContainer>
            <br />
            <br />
            <br />
            <div className='food-text'>
                <h2 className ='fastfood-text'>
                    Sorry! There are no vendors available.
                </h2>
                <span className='span-text'>We don't have vendors to present in your area yet</span>
            </div>
        </CategoriesContainer>
	);
};




export default pharmacyCategories;