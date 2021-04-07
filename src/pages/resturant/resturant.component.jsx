import React from 'react';
import Header from '../../components/header/header.component';
import SubHeader from '../../components/sub-header/subheader.component';
import Categories from '../../components/categories/categories.component';
import ResturantFilter from '../../components/resturant-filter/resturant-filter.component';
// import Vendors from '../../components/vendor/vendor-categories.component';
// import VendorsTwo from '../../components/vendor-two/vendor-two.component';
import { ResturantContainer} from './resturant.styles';




const Resturantpage = () => {
    console.log()
    return (
        <ResturantContainer>
           <div className='resturant'>
              
                <Header />
               <SubHeader />
               <ResturantFilter />
               <br />
               <br />
               <Categories />
           </div>
        </ResturantContainer>
    )
};


export default Resturantpage;