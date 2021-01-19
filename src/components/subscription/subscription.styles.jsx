import styled from 'styled-components';


export const SubscriptionContainer = styled.div`
width: 100vw;
height: 55vh;
background-color: #ff8c00;

@media screen and (max-width: 800px) {
    height: auto;
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

    @media screen and (max-width: 800px) {
        display: inline-block;
        
      }
}

.select {
    width: 200px;
    height: 9.4vh;
    justify-content: center; 

    @media screen and (max-width: 800px) {
        width: 100%;
      }
}

.text-a {
    width: 200px;
    height: 8.3vh; 
    justify-content: center;
    text-align: center;
    display: flex;

    @media screen and (max-width: 800px) {
        margin-top: 1rem;
        width: 100%;
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
        margin-top: 2rem;
        width: 100%;
      }
}



`;