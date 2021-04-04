import React from 'react';
import { FilterContainer} from './filter.styles';
import Service from '../service/service.component';

const Filter = () => {
    return(
        <FilterContainer>

            <div className='sort'>
                   <select className='selectone'>
                    <option value='latest'>Select your city</option>
                    <option value='lagos'>Lagos</option>
                    <option value='abuja'>Abuja</option>
                   </select>

                   <select className='selecttwo'>
                    <option value='latest'>Select your area</option>
                    <option value='latest'>Lekki</option>
                    <option value='latest'>Gwarinpa</option>
                   </select>
                    
               </div>

           
        </FilterContainer>
       
        	
    )
};

export default Filter;