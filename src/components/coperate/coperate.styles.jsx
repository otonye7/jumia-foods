import styled from 'styled-components';

export const CoperateContainer = styled.div`
width: 100%;
height: 60%;

.overall {
  display: flex;
  justify-content: center;
  
  @media screen and (max-width: 800px) {
    display: flex;
    jsutfify-content: center;
  }

}

.container { 
    justify-content: flex-start;
    margin-top: 2rem;
    width: 30%;

    @media screen and (max-width: 800px) {
        display: none;
      }
}

.end-container {
    justify-content: flex-end;
    width: 25%;
}

.text {
    margin-top: 2rem;
    display: inline-block;
    justify-content: center;
    text-align: center;

    
    @media screen and (min-width: 500px) and (max-width: 800px){
       position: relative;
       left: 35px;
    }
    
}

.up-text {
    
    align-items: center;
    display: flex;
    justify-content: center;
    
}

.down-text {
    font-size: 23px;
    align-items: center;
    justify-content: center;
    display: block;
    
    
}


img {
    width: 170px;
    height: auto;
}

button {
    min-width: 10px;
    width: auto;
    border-radius: 5px;
    height: 40px;
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