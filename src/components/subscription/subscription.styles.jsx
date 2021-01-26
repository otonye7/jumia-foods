import styled from 'styled-components';


export const SubscriptionContainer = styled.div`
width: 100%;
height: 230px;
background-color: #ff8c00;

@media screen and (max-width: 800px) {
    height: 330px;
    width: auto;
  }


  @media screen and (min-width: 500px) and (max-width: 800px){
       height: 280px;
    }

.overall {
    justify-content: center;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;

    @media screen and (max-width: 800px) {
  
       
  }
}

.paragraph {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;

    @media screen and (max-width: 800px) {
       display: none;
  }
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