import styled from 'styled-components';


export const DirectionsContainer = styled.div`
width: 98%;
height: 100%;
justify-content: center;
margin: 0 auto;


@media screen and (max-width: 800px) {
    display: none;
  }


.text {
    color: #4a4a4a;
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 1.125;
    font-family: Muli,Merriweather,Georgia,serif;
}

.text-direction {
    color: #4a4a4a;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.125;
    font-family: Muli,Merriweather,Georgia,serif;
}

.text-description {
    color: #4a4a4a;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.125;
    font-family: Muli,Merriweather,Georgia,serif;
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