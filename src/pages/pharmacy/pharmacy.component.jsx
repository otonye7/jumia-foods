import React from 'react';
import Header from '../../components/header/header.component';
import SubHeader from '../../components/sub-header/subheader.component';
import ResturantFilter from '../../components/resturant-filter/resturant-filter.component';
import PharmacyVendor from '../../components/pharmacy-vendor/pharmacy-vendor.component';
import { PharmacyContainer} from './pharmacy.styles';




const Pharmacypage = () => {
    return (
        <PharmacyContainer>
           <div className='resturant'>
               <Header />
               <SubHeader />
               <ResturantFilter />
               <PharmacyVendor />
           </div>
        </PharmacyContainer>
    )
};


export default Pharmacypage;