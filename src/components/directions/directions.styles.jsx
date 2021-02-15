import styled from 'styled-components';


export const DirectionsContainer = styled.div`
width: 100%;
height: 100%;
justify-content: center;

@media screen and (max-width: 800px) {
    display: none;
  }

.container {
    text-align: center;
}

.overall {
    width: 100%;
    display: flex;
    justify-content: space-around;
}





.loc-text {
    text-align: center;
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