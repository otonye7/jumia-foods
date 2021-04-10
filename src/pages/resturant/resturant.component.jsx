import React from 'react';
import Header from '../../components/header/header.component';
import SubHeader from '../../components/sub-header/subheader.component';
import Categories from '../../components/categories/categories.component';
import { Route } from 'react-router-dom';
import CategoriesII from '../../components/categoriesii/categoriesii.component';
import ResturantFilter from '../../components/resturant-filter/resturant-filter.component';
import KfcMallPage from '../kfc-mall/kfc-mall.component';
// import Bottom from '../../components/bottom/bottom.component';
import { ResturantContainer} from './resturant.styles';




const Resturantpage = ({match}) => {
    console.log()
    return (
        <ResturantContainer>
           <div className='resturant'>
              
                <Header />
               <SubHeader />
               <br />
               <ResturantFilter />
               <br />
               <br />
               <div className='categories'>
                     {/* <Categories /> */}
                     <Route exact path={`${match.path}`} component={Categories} />
                     <Route path={`${match.path}/:kfc-mall`} component={KfcMallPage} />
                     <br />
                     <br />
                     {/* <CategoriesII /> */}
                     <Route exact path={`${match.path}`} component={CategoriesII} />
               </div>
               <br />
               <br />
               <br />
               <br />
               {/* <Bottom /> */}
             
           </div>
        </ResturantContainer>
    )
};


export default Resturantpage;