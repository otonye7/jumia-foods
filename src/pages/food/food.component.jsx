import React from 'react';
import Header from '../../components/header/header.component';
import SubHeader from '../../components/sub-header/subheader.component';
import ResturantFilter from '../../components/resturant-filter/resturant-filter.component';
import FoodCategories from '../../components/food-categories/food-categories.component';
import Bottom from '../../components/bottom/bottom.component';
import { WineContainer} from './food.styles';




const Foodpage = () => {
    return (
        <WineContainer>
           <div className='resturant'>
               <Header />
               <SubHeader />
               <br />
               <ResturantFilter />
               <br />
               <br />
               <FoodCategories />
               <br />
               <br />
               <br />
               <Bottom />
           </div>
        </WineContainer>
    )
};


export default Foodpage;