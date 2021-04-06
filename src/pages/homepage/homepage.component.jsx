import React from 'react';
import Header from '../../components/header/header.component';
import Hero from '../../components/hero/hero.component';
import HeroText from '../../components/hero-middle/hero-middle.component';
import HeroEnd from '../../components/hero-end/hero-end.component';
import SubHeader from '../../components/sub-header/subheader.component';
import Directions from '../../components/directions/directions.component';
import Subscription from '../../components/subscription/subscription.component';
import CoperateBegining from '../../components/coperate-begining/coperate-begining.component';
import Coperate from '../../components/coperate/coperate.component';
import Order from '../../components/orders/order.component';
import Footer from '../../components/footer/footer.component';
import { HomepageContainer} from './homepage.styles';

const Homepage = () => {
    return (
        <HomepageContainer>
        <div className='homepage'>
        <Header />
        <br />
        <SubHeader />
        <div className='hero'>
          <Hero />
          <HeroText />
          <HeroEnd />
        </div>
        <br />
        <Directions />
        <br />
        <br />
        <br />
        <Subscription />
        <br />
        <div className='coperate'>
            <CoperateBegining />
            <Coperate /> 
        </div>
        <br />
        <br />
        <Order />
        <Footer />
    </div>
    </HomepageContainer>
    )
    
 };


export default Homepage;