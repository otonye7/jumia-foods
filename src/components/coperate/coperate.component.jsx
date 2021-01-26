import React from 'react';
import Beef from  '../../assets/beef.png';
import { CoperateContainer} from './coperate.styles';


const Hero = () => {
    return (
        <CoperateContainer>
            <div className='overall'>
                
            <div className='container'>
                <img  src={Beef} alt="" />
           </div>

            <div className='text'>
                <h1 className='up-text'>S^mo Food for Corporate</h1>
                <span className='down-text'>Order lunch, fuel for meetings or late-night deliveries to the office. Your favorite vendors coming to a desk near you.</span>
                <br />
                <div className='c-buttons'>
                    <button>Get Started</button>
                </div> 
            </div>

            <div className='end-container'>
                
           </div>
            </div>

            
            
        </CoperateContainer>
    )
};


export default Hero;