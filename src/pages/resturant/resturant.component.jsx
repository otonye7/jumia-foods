import React from 'react';
import Header from '../../components/header/header.component';
import SubHeader from '../../components/sub-header/subheader.component';
import Categories from '../../components/categories/categories.component';
import Vendors from '../../components/vendor/vendor-categories.component';
import VendorsTwo from '../../components/vendor-two/vendor-two.component';
import { ResturantContainer} from './resturant.styles';
import { Route} from "react-router-dom";
import KfcPage from '../kfc/kfc.component';



const Resturantpage = ({match}) => {
    console.log(match)
    return (
        <ResturantContainer>
           <div className='resturant'>
              
                <Header />
               <SubHeader />
               <Route exact path={`${match.path}`} component={Categories} />
               <Route  path={`${match.path}/:Kfcid`} component={KfcPage} />
               <Route exact path={`${match.path}`} component={Vendors} />
               <Route exact path={`${match.path}`} component={VendorsTwo} />
              
           </div>
        </ResturantContainer>
    )
};


export default Resturantpage;