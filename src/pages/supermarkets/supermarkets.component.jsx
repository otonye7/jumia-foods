import React from 'react';
import Header from '../../components/header/header.component';
import SubHeader from '../../components/sub-header/subheader.component';
import ResturantFilter from '../../components/resturant-filter/resturant-filter.component';
import Bottom from '../../components/bottom/bottom.component';
import SuperMarketsCategories from '../../components/supermarket-categories/supermarket-categories.component';
import { SuperMarketsContainer} from './supermarkets.styles';



const Supermarketspage = () => {
    
    return (
        <SuperMarketsContainer>
           <div className='resturant'>
               <Header />
               <SubHeader />
               <br />
               <ResturantFilter />
               <br />
               <br />
               <SuperMarketsCategories />
               <br />
               <br />
               <br />
               <Bottom />
           </div>
        </SuperMarketsContainer>
    )
};


export default Supermarketspage;