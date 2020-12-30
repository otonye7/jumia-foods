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

        <div className='Delivering'>
            <h3>Delivering To</h3>
       
       
       <div className='bars'>
        <div className='search'>
            <input  className='text-a' label='search'  name="search" id="search" />
        </div>

        <div className='filter'>
            <input  className='text-a' label='filter'  name="filter" id="filter" />
        </div>

        <select className='select'>
                    <option value='latest'>Select your city</option>
                    <option value='lagos'>Lagos</option>
                    <option value='abuja'>Abuja</option>
        </select>
       </div>
        
        </div>
            
        </FilterContainer>
    )
};


export default withRouter(ResturantFilter);