import styled from 'styled-components';


export const OrderContainer = styled.div`
width: 100%;
height: 260px;
background-color: #ff8c00;
display: flex;
justify-content: center;

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
    display: flex;
    justify-content: center;
    color: white;
    width: 50vw;

    @media screen and (max-width: 800px) {
        display: none;
      }
}

.container {
    
}

.c-buttons {
    display: flex;
    width: 70%;
    justify-content: space-around;

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
}
`;