import React from 'react';
import Header from '../../components/header/header.component';
import SubHeader from '../../components/sub-header/subheader.component';
import ResturantFilter from '../../components/resturant-filter/resturant-filter.component';
import SuperMarketsVendor from '../../components/super-markets-vendor/supermarket-vendor.component';
import { SuperMarketsContainer} from './supermarkets.styles';
import { Route} from "react-router-dom";
import KfcPage from '../kfc/kfc.component';


const Supermarketspage = ({match}) => {
    
    return (
        <SuperMarketsContainer>
           <div className='resturant'>
               <Header />
               <SubHeader />
               <ResturantFilter />
               <Route exact path={`${match.path}`} component={SuperMarketsVendor} />
               <Route path={`${match.path}/:bukkahutId`} component={KfcPage} />
           </div>
        </SuperMarketsContainer>
    )
};


export default Supermarketspage;