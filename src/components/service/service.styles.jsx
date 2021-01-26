import styled from 'styled-components';


export const ServiceContainer = styled.div`
width: 100%;

@media screen and (max-width: 800px) {
  width: 80%;
  
}

.container {
    justify-content: flex-start; 
   }

.card-container {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 800px) {
      display: inline-block;
      
    }
  }

  .down-card {
    width: 100%;
    height: auto;
    display: flex;
    
    justify-content: space-between;
    margin-top: 1rem;

    @media screen and (max-width: 800px) {
      display: inline-block;
      
    }
  }
  
  
  

.card-1 {
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 30%;

    @media screen and (max-width: 800px) {
      width: 300px;
    }

    @media screen and (min-width: 500px) and (max-width: 800px){
       position: relative;
       left: 18px;
       width: 520px;
    }
  }

.card-2 {
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 30%;

    @media screen and (max-width: 800px) {
      width: 300px;
    }

    @media screen and (min-width: 500px) and (max-width: 800px){
       position: relative;
       left: 18px;
       width: 520px;
    }

  }

  .card-3 {
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 30%;

    @media screen and (max-width: 800px) {
      width: 300px;
    }

    @media screen and (min-width: 500px) and (max-width: 800px){
       position: relative;
       left: 18px;
       width: 520px;
    }

  }

  .card-4 {
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 30%;

    @media screen and (max-width: 800px) {
      width: 300px;
    }

    @media screen and (min-width: 500px) and (max-width: 800px){
       position: relative;
       left: 18px;
       width: 520px;
    }

  }

  .card-5 {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 30%;
    justify-content: center;
  }

 .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

  .card-container {
    
  }

  img {
    width: 16%;
    height: auto;
   
}

`;

