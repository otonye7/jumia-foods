import React from 'react';
import { HeroContainer} from './hero-middle.styles';



const HeroText= () => {
    return (
        <HeroContainer>
                <div className='container'>
                    <div className='text'>Everything you need, delivered now</div>
                    <br />
                    <div className='discover'>Discover local vendors that deliver to your doorstep</div>
                </div>
        </HeroContainer>
    )
};


export default HeroText;