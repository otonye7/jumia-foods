import React from 'react';
import {  CategoriesContainer } from './supermarket-categories.styles';
import {supermarkets} from '../../redux/supermarket/supermarket.selector';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import MenuItems from '../menu-items/menu-items.component';




const  supermarketCategories = ({sections}) => {

	return ( 
        <CategoriesContainer>
            <div className='food-text'>
                <h2 className ='fastfood-text'>
                    SuperMarket Deals
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
    sections: supermarkets
})


export default connect(mapStateToProps)(supermarketCategories);