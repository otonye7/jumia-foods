import styled from 'styled-components';
import Jumia from  '../../assets/services.jpg';


export const HeroContainer = styled.div`
width: 200px;
height:30rem;


.container {
    width: 100%;
}

.first-image {
    width: 100%;
    height: 100%;
    background-image: url(${Jumia});
    background-position: center;
    background-size: cover;
   }

`;