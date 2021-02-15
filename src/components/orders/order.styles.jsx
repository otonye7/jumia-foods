import styled from 'styled-components';


export const OrderContainer = styled.div`
width: 100%;
background-color: #ff8c00;


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
}
`;