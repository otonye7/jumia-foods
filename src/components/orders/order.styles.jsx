import styled from 'styled-components';
import Jumia from  '../../assets/small.png';

export const OrderContainer = styled.div`
background-color: #f68b1e;
height: 26rem;
display: flex;
position: relative;

@media screen and (max-width: 767px){
     width: 100%;
     display: flex;
     flex-direction: column;
     height: 20rem;
}


.container {
  width: 60%;

  @media screen and (max-width: 767px){
     width: 100%;
}
}

.title {
  width: 75%;
  margin: 0 auto;

  @media screen and (max-width: 767px){
      width: 100%;
}
}

.title-header {
    color: white;
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.125;
    font-family: Muli,Merriweather,Georgia,serif;

    @media screen and (max-width: 767px){
      text-align: center;
}

}

.description {
    color: white;
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 1.125;
    font-family: Muli,Merriweather,Georgia,serif;

    @media screen and (max-width: 767px){
      display: none;
}
}

.image {
    width: 40%;
    right: 200px;
    height: 100%;
    position: absolute;
    background-image: url(${Jumia});
    background-position: center;
    background-size: cover;

    @media screen and (max-width: 767px){
      display: none;
}
   }

  .buttons {
    display: flex;

  @media screen and (max-width: 767px){
     flex-direction: column;
}
  }

  .android {
    border: 1px solid white;
    background-color: #f68b1e;

    @media screen and (max-width: 767px){
     width: 100%;
}
  }

  .apple {
    margin-left: 1rem;
    border: 1px solid white;
    background-color: #f68b1e;

 @media screen and (max-width: 767px){
     width: 100%;
     margin-left: 0rem;
}
  }
/* 

@media screen and (max-width: 800px) {
        display: none;
      }

@media screen and (max-width: 800px) {
    height: auto;
  }

.order-text {
    display: flex;
    color: white;
    justify-content: center;

    @media screen and (max-width: 800px) {
      display: flex;
      justify-content: center;
    }
}

.paragraph {
   display: block;
    text-align: center;
    width: 520px;
    color: white;
    margin-left: 410px;

    @media screen and (max-width: 800px) {
        display: none;
      }
}

.container {
 text-align: center;
}

.c-buttons {
    display: flex;
    width: 30%;
    justify-content: space-around;
    padding-bottom: 1em;

    @media screen and (max-width: 800px) {
        display: inline-block;
      }
}


.overall-button {
  display: flex;
  justify-content: center;

  @media screen and (max-width: 800px) {
      display: flex;
      justify-content: center;
    }
}

button {
    min-width: 10px;
    width: auto;
    border-radius: 5px;
    height: 38px;
    letter-spacing: 0.5px;
    line-height: 28px;
    padding: 0 18px 0 18px;
    font-size: 12px;
    background-color: black;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;

    @media screen and (max-width: 800px) {
       width: 180px;
       margin-top: 1rem;
      }
} */
`;