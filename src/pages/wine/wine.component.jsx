import React from 'react';
import Header from '../../components/header/header.component';
import SubHeader from '../../components/sub-header/subheader.component';
import ResturantFilter from '../../components/resturant-filter/resturant-filter.component';
import { WineContainer} from './wine.styles';
import WineVendor from '../../components/wine-vendor/wine-vendor.component';
import WineVendorTwo from '../../components/wine-vendor-two/wine-vendor-two.component';



const Winepage = () => {
    return (
        <WineContainer>
           <div className='resturant'>
               <Header />
               <SubHeader />
               <ResturantFilter />
               <WineVendor />
               <WineVendorTwo />
           </div>
        </WineContainer>
    )
};


export default Winepage;