  import React from 'react';
import { HeroContainer} from './hero.styles';
import Veg from  '../../assets/beef.png';
import Filter from '../filter/filter.component';


const Hero = () => {
    return (
        <HeroContainer>
            <div className='container'>

            <div className='hero-image'>
                <img  src={Veg} alt="" />
                <img  src={Veg} alt="" />
            </div>

            <div className='hero-text'>
                <h1 className='up-text'>Everything you need, delivered now</h1>
                <h3 className='down-text'>Discover local vendors that deliver to your doorstep</h3>

                 <Filter />
                 
            </div>

            <div className='hero-image-end'>
                <img  src={Veg} alt="" />
                <img  src={Veg} alt="" />
            </div>

            </div>

            
           
        </HeroContainer>
    )
};


export default Hero;