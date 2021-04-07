import React from 'react';
import {  CategoriesContainer } from './food-categories.styles';
import {foods} from '../../redux/food/food.selector';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import MenuItems from '../menu-items/menu-items.component';



const  FoodCategories = ({sections}) => {

	return ( 
        <CategoriesContainer>
            <div className='food-text'>
                <h2 className ='fastfood-text'>
                    Foods Deals
                </h2>
            </div>

            <div className='categories-items'>
                    
                    <div className='preview'>

                        {   
                            sections.map(({id,  ...otherSectionProps}) =>  (
                                <MenuItems key={id}  {...otherSectionProps}/>
                            )) 

                        }
                    </div>
                </div>
        </CategoriesContainer>
	);
};

const mapStateToProps = createStructuredSelector({
    sections: foods
})


export default connect(mapStateToProps)(FoodCategories);