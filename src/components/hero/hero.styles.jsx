import styled from 'styled-components';


export const HeroContainer = styled.div`
width: 100%;

.container {
    width: 100%;
    display: flex;
    
}

.hero-text {
    width: 63%;
    justify-content: center;
    padding: 3em;

    @media screen and (max-width: 800px) { 
        
      }
}

.up-text {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.125;
    align-items: center;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 800px) {
        display: block;
      }
    
}

.down-text {
    font-size: 21px;
    align-items: center;
    display: flex;
    justify-content: center;
    margin-left: 2em;
    
    @media screen and (max-width: 800px) {
        display: none;
      }
      
}


.hero-image {
    width: 15%;
    
    @media screen and (max-width: 800px) {
        display: none;
      }
}

img {
    width: 100%;
    height: auto;
   
}

.hero-image-end {
    width: 15%;
    
    @media screen and (max-width: 800px) {
        display: none;
      }

}
`;