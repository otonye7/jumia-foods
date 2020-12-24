import styled from 'styled-components';


export const HeroContainer = styled.div`
width: 100vw;
height: 60%;

.container {
    display: flex;
    justify-content: space-evenly;
}

.hero-text {
    width: 64vw;
    justify-content: center;
    padding: 3em;
}

.up-text {
    font-size: 41px;
    align-items: center;
    justify-content: center;
    
}

.down-text {
    font-size: 21px;
    align-items: center;
    justify-content: center;
    margin-left: 6rem;
    
    
}

.hero-image {
    width: 18vw;
    
}

img {
    width: 14vw;
    height: auto;
   
}

.hero-image-end {
    width: 18vw; 
}
`;