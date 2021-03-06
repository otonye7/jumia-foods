import React from 'react';
import {  CategoriesContainer } from './categoriesii.styles';
import {resturants} from '../../redux/resturant/resturant.selector';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import MenuItems from '../menu-items/menu-items.component';



const  Categoriesii = ({sections}) => {

	return ( 
        <CategoriesContainer>
            <div className='food-text'>
                <h2 className ='fastfood-text'>
                    MORE VENDORS
                </h2>
            </div>

            <div className='categories-items'>
                    
                    <div className='preview'>

                        {   
                            sections.filter((section, id) => id > 4).map(({id,  ...otherSectionProps}) =>  (
                                <MenuItems key={id}  {...otherSectionProps}/>
                            )) 

                        }
                    </div>
                </div>
        </CategoriesContainer>
	);
};

const mapStateToProps = createStructuredSelector({
    sections: resturants
})


export default connect(mapStateToProps)(Categoriesii);