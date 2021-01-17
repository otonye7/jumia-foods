import styled from 'styled-components';


export const DirectionsContainer = styled.div`
width: 100vw;
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
    margin: 1.3rem;

}

.image-container {
    display: block;
    width: 25%;
}

.image-2-container {
    display: block;
    width: 25%;

}

.image-3-container {
    display: block;
    width: 25%;
}

.location {
    margin-left: 6rem;
}

.bike {
    margin-left: 6rem;
}

.phone {
    margin-left: 6rem;
}

img {
    width: 25%;
    height: auto;
    
}
`;