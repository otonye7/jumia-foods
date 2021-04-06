import styled from 'styled-components';


export const FooterContainer = styled.div`
background-color: black;
width: 100%;
height: auto;
color: white;

.footer-container {
  display: flex;
  justify-content: space-evenly;
  
  
  @media screen and (max-width: 800px) {
      display: inline-block;
      height: auto;
    }
}

.samo-foods {
  display: flex;
  justify-content: center;
  font-size: 19px;
  @media screen and (max-width: 800px) {
     
    }
}

.title {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.125;
    font-family: Muli,Merriweather,Georgia,serif;
}

.list {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.125;
    font-family: Muli,Merriweather,Georgia,serif;
}

`;