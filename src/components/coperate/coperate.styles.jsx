import styled from 'styled-components';

export const CoperateContainer = styled.div`
width: 100vw;
height: 60%;

.overall {
  display: flex;
}

.container { 
    justify-content: flex-start;
    margin-top: 2rem;
    width: 45vw;

    @media screen and (max-width: 800px) {
        display: none;
      }
}

.end-container {
    justify-content: flex-end;
    width: 45vw;
}

.text {
    margin-top: 2rem;
    display: block;
    justify-content: center;
    text-align: center;
    
}

.up-text {
    
    align-items: center;
    justify-content: center;
    
}

.down-text {
    font-size: 23px;
    align-items: center;
    justify-content: center;
    display: block;
    
    
}


img {
    width: 18vw;
    height: auto;
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
}

`;