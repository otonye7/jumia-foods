import React from 'react';
import Header from '../../components/header/header.component';
import SubHeader from '../../components/sub-header/subheader.component';
import ResturantFilter from '../../components/resturant-filter/resturant-filter.component';
import SuperMarketsVendor from '../../components/super-markets-vendor/supermarket-vendor.component';
import { SuperMarketsContainer} from './supermarkets.styles';




const Supermarketspage = () => {
    return (
        <SuperMarketsContainer>
           <div className='resturant'>
               <Header />
               <SubHeader />
               <ResturantFilter />
               <SuperMarketsVendor />
           </div>
        </SuperMarketsContainer>
    )
};


export default Supermarketspage;