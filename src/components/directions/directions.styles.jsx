import styled from 'styled-components';


export const DirectionsContainer = styled.div`
width: 100%;
height: 100%;
justify-content: center;

@media screen and (max-width: 800px) {
    display: none;
  }

.container {
    display: flex;
    justify-content: space-evenly;
}

.text-container {
    justify-content: center;
}

.overall {
    width: 100%;
    display: flex;
    justify-content: space-around;
}





.loc-text {
    display: inline-block;
    justify-content: center;
}

.bike {
    display: flex;
    justify-content: center;
}

.phone {
    
}

img {
    width: 25%;
    height: auto;
    
}
`;