import styled from 'styled-components';
import Jumia from  '../../assets/jumia-for-corporate.jpg';


export const HeroContainer = styled.div`
width: 35%;
height:35rem;

@media screen and (max-width: 767px){
      display: none;
}

.container {
    width: 100%;
}

.first-image {
    width: 100%;
    height: 60%;
    background-image: url(${Jumia});
    background-position: center;
    background-size: cover;

   }

`;