import React from 'react';
import { FilterContainer} from './resturant-filter.styles';
import  { Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

const ResturantFilter = ({history}) => {
    return (
        <FilterContainer>
        <div className='link-container'>
           <Link to='/' className='filter-container'>
                Home
            </Link>
            <div className='arrow'>&#10095;</div>
            <Link className='filter-container'>
                Vendor
            </Link>
        </div>
        
       
            
        </FilterContainer>
    )
};


export default withRouter(ResturantFilter);