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
  margin-left: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-right: 1rem;
  height: 10rem;
  box-shadow: 0px 1.5px 2px 0px rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;

  @media screen and (max-width: 767px){
     width: 100%;
     margin-left: 0rem;
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
  font-weight: 400;
  line-height: 1.125;
  font-family: Muli,Merriweather,Georgia,serif;
}

img {
    width: 13%;
    height: auto;
   
} 

`;

