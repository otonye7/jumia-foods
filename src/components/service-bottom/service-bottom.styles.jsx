import styled from 'styled-components';


export const ServiceContainer = styled.div`
display: flex;
justify-content: space-between;

@media screen and (max-width: 767px){
     display: flex;
     flex-direction: column;
}

.card {
  width: 32%;
  height: 10rem;
  box-shadow: 0 1.5px 4px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;

  @media screen and (max-width: 767px){
     width: 100%;
}
}

.container {
  display: flex;
  flex-direction: column;
}

.card-title {
  color: orange;
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.125;
  font-family: Muli,Merriweather,Georgia,serif;
}

.card-text {
  padding-top: 0.5rem;
  font-size: 0.9rem;
  font-weight: 300;
  line-height: 1.125;
  font-family: Muli,Merriweather,Georgia,serif;
}

img {
    width: 13%;
    height: auto;
   
} 

`;