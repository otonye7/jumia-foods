import styled from 'styled-components';


export const HeroContainer = styled.div`
width: 100vw;
height: 60%;
 

.container {
    display: flex;
    
}

.hero-text {
    width: 100%;
    justify-content: center;
    padding: 3em;

    @media screen and (max-width: 800px) { 
        
      }
}

.up-text {
    font-size: 41px;
    align-items: center;
    display: flex;
    justify-content: center;
    
}

.down-text {
    font-size: 21px;
    align-items: center;
    display: flex;
    justify-content: center;
    margin-left: 6px;
    
    
}

.hero-image {
    width: 17%;
    
    @media screen and (max-width: 800px) {
        display: none;
      }
}

img {
    width: 100%;
    height: auto;
   
}

.hero-image-end {
    width: 17%;
    
    @media screen and (max-width: 800px) {
        display: none;
      }
}
`;