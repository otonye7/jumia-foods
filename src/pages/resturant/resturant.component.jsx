import React from 'react';
import Header from '../../components/header/header.component';
import SubHeader from '../../components/sub-header/subheader.component';
import ResturantFilter from '../../components/resturant-filter/resturant-filter.component';
import Categories from '../../components/categories/categories.component';
import { ResturantContainer} from './resturant.styles';



const Resturantpage = () => {
    return (
        <ResturantContainer>
           <div className='resturant'>
               <Header />
               <SubHeader />
               <ResturantFilter />
               <Categories />
           </div>
        </ResturantContainer>
    )
};


export default Resturantpage;