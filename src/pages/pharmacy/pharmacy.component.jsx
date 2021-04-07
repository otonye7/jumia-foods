import React from 'react';
import Header from '../../components/header/header.component';
import SubHeader from '../../components/sub-header/subheader.component';
import ResturantFilter from '../../components/resturant-filter/resturant-filter.component';
import PharmacyCategories from '../../components/pharmacy-categories/pharmacy-categories.component';
// import Bottom from '../../components/bottom/bottom.component';
import { PharmacyContainer} from './pharmacy.styles';




const Pharmacypage = () => {
    return (
        <PharmacyContainer>
           <div className='resturant'>
               <Header />
               <SubHeader />
               <br />
               <ResturantFilter />
               <br />
               <br />
               <PharmacyCategories />
           </div>
        </PharmacyContainer>
    )
};


export default Pharmacypage;