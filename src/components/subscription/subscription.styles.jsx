import styled from 'styled-components';


export const SubscriptionContainer = styled.div`
width: 99%;
height: 15rem;
background-color: #f68b1e;
margin: 0 auto;

@media screen and (max-width: 767px){
     height: 28rem;
}

.container {
  align-content: center;
  text-align: center;
}

.subscribe-text {
    color: white;
    text-align: center;
    font-size: 2.3rem;
    font-weight: 600;
    line-height: 1.125;
    font-family: Muli,Merriweather,Georgia,serif;
}

.subscribe-description {
    color: white;
    text-align: center;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.125;
    font-family: Muli,Merriweather,Georgia,serif;
}

.selectone {
  width: 180px;
  height: 4rem;
  margin-right: 1rem;

  @media screen and (max-width: 767px){
     width: 100%;
}
}

/* .form {
  width: 100%;
} */

.form {
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px; 
  box-sizing: border-box; 
  z-index: 2;
}

.firstname {
  width: 200px;
  height: 3.5rem;

  @media screen and (max-width: 767px){
     width: 100%;
}
}

.sub-container {
  display: flex;
  justify-content: center; 

  @media screen and (max-width: 767px){
     display: flex;
     flex-direction: column;
}
}

.button {
  margin-left: 1rem;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.125;
    font-family: Muli,Merriweather,Georgia,serif;

@media screen and (max-width: 767px){
     width: 100%;
     margin-left: 0rem;
}
}


`;