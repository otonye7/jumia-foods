import React from 'react';
import Header from '../../components/header/header.component';
import SubHeader from '../../components/sub-header/subheader.component';
import ResturantFilter from '../../components/resturant-filter/resturant-filter.component';
import WineCategories from '../../components/wine-categories/wine-categories.component';
import Bottom from '../../components/bottom/bottom.component';
import { WineContainer} from './wine.styles';




const Winepage = () => {
    return (
        <WineContainer>
           <div className='resturant'>
               <Header />
               <SubHeader />
               <ResturantFilter />
               <br />
               <br />
               <WineCategories />
               <Bottom />
           </div>
        </WineContainer>
    )
};


export default Winepage;