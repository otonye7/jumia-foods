import React from 'react';
import { HeroContainer} from './hero-middle.styles';
import TelegramIcon from '@material-ui/icons/Telegram';
import Filter from '../../components/filter/filter.component';
import Service from '../../components/service/service.component';



const HeroText= () => {
    return (
        <HeroContainer>
                <div className='container'>
                    <div className='text'>Everything you need, delivered now</div>
                    <br />
                    <div className='discover'>Discover local vendors that deliver to your doorstep</div>
                </div>

                <div className='second-container'>
                    <div className='sub-container'>
                        <TelegramIcon className='telegram'/>
                        <h2 className='delivering'>Delivering to</h2>
                    </div>
                </div>

                <div className='dropdown'>
                    <Filter />
                </div>
                <br />
                <div className='third-container'>
                    <div className='thirdsub-container'>
                        <h2 className='service'>Choose A Service</h2>
                        <br />
                        <Service />
                    </div>
                </div>
        </HeroContainer>
    )
};


export default HeroText;