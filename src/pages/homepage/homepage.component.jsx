import React from 'react';
import Header from '../../components/header/header.component';
import Hero from '../../components/hero/hero.component';
import SubHeader from '../../components/sub-header/subheader.component';
import Directions from '../../components/directions/directions.component';
import Subscription from '../../components/subscription/subscription.component';
import { HomepageContainer} from './homepage.styles';

const Homepage = () => {
    return (
        <HomepageContainer>
        <div className='homepage'>
        <Header />
        <SubHeader />
        <Hero />
        <Directions />
        <br />
        <Subscription />
    </div>
    </HomepageContainer>
    )
    
 };


export default Homepage;