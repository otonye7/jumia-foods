import React from 'react';
import Header from '../../components/header/header.component';
import Hero from '../../components/hero/hero.component';
import SubHeader from '../../components/sub-header/subheader.component';
import Directions from '../../components/directions/directions.component';
import Subscription from '../../components/subscription/subscription.component';
import Coperate from '../../components/coperate/coperate.component';
import Order from '../../components/orders/order.component';
import Footer from '../../components/footer/footer.component';
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
        <br />
        <Coperate />
        <br />
        <br />
        <Order />
        <Footer />
    </div>
    </HomepageContainer>
    )
    
 };


export default Homepage;