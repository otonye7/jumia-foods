import React from 'react';
import { FilterContainer} from './filter.styles';
import Service from '../service/service.component';

const Filter = () => {
    return(
        <FilterContainer>

            <div className='container'>
              <div className='text'>
                 <h3 className='delivering-text'>Delivering to</h3>
               </div>  
            </div>

            <div className='sort'>
                   <select className='select'>
                    <option value='latest'>Select your city</option>
                    <option value='lagos'>Lagos</option>
                    <option value='abuja'>Abuja</option>
                   </select>

                   <select className='select'>
                    <option value='latest'>Select your area</option>
                   </select>
                    
               </div>

               <Service />
           
        </FilterContainer>
       
        	
    )
};

export default Filter;