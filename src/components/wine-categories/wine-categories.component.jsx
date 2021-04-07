import React from 'react';
import {  CategoriesContainer } from './wine-categories.styles';
import {wines} from '../../redux/wine/wine.selector';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import MenuItems from '../menu-items/menu-items.component';



const  WineCategories = ({sections}) => {

	return ( 
        <CategoriesContainer>
            <div className='food-text'>
                <h2 className ='fastfood-text'>
                    Wine Deals
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
    sections: wines
})


export default connect(mapStateToProps)(WineCategories);