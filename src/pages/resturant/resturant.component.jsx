import React from 'react';
import Header from '../../components/header/header.component';
import SubHeader from '../../components/sub-header/subheader.component';
import Categories from '../../components/categories/categories.component';
import CategoriesII from '../../components/categoriesii/categoriesii.component';
import ResturantFilter from '../../components/resturant-filter/resturant-filter.component';
import Bottom from '../../components/bottom/bottom.component';
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
               <div className='categories'>
                     <Categories />
                     <br />
                     <br />
                     <CategoriesII />
               </div>
               <br />
               <br />
               <br />
               <br />
               <Bottom />
             
           </div>
        </ResturantContainer>
    )
};


export default Resturantpage;