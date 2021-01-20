import styled from 'styled-components';


export const SubscriptionContainer = styled.div`
width: 100%;
height: auto;
background-color: #ff8c00;

@media screen and (max-width: 800px) {
    height: auto;
    width: auto;
  }

.overall {
    justify-content: center;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
}

.paragraph {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
}

.sort {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin: 1px;

    @media screen and (max-width: 800px) {
        display: inline-block;
        
      }
}

.city-container {

    @media screen and (max-width: 800px) {
        display: flex;
        justify-content: center;
      }
}

.email-container {

    @media screen and (max-width: 800px) {
        display: flex;
        justify-content: center;
      }
}

.select {
    width: 200px;
    height: 40px;
    justify-content: center; 

    @media screen and (max-width: 900px) {
        width: 220px;
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
        margin-top: 1rem;
        width: auto;
      }
}

.subscribe-button {

    @media screen and (max-width: 800px) {
        display: flex;
        justify-content: center;
      }
}


`;