import styled from 'styled-components';


export const OrderContainer = styled.div`
width: 100vw;
height: 60vh;
background-color: #ff8c00;
display: flex;
justify-content: center;

@media screen and (max-width: 800px) {
    height: 50vh;
  }

.order-text {
    display: flex;
    color: white;
}

.paragraph {
    display: flex;
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
    width: 30vw;
    justify-content: space-around;

    @media screen and (max-width: 800px) {
        display: inline-block;
      }
}

button {
    min-width: 10px;
    width: auto;
    border-radius: 5px;
    height: 50px;
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
       width: 150%;
       margin-top: 1rem;
      }
}
`;