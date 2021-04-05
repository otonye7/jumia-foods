import styled from 'styled-components';


export const ServiceContainer = styled.div`
display: flex;
justify-content: space-between;

@media screen and (max-width: 767px){
     display: flex;
     flex-direction: column;
}

.card {
  width: 32%;
  height: 10rem;
  box-shadow: 0 1.5px 4px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;

  @media screen and (max-width: 767px){
     width: 100%;
}
}

.container {
  display: flex;
  flex-direction: column;
}

.card-title {
  color: orange;
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.125;
  font-family: Muli,Merriweather,Georgia,serif;
}

.card-text {
  padding-top: 0.5rem;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.125;
  font-family: Muli,Merriweather,Georgia,serif;
}

img {
    width: 13%;
    height: auto;
   
} 

/* @media screen and (max-width: 800px) {
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
    border: 2px solid red;

    @media screen and (max-width: 800px) {
      width: 300px;
    }

    @media screen and (max-width: 280px) {
      width: 200px;
    }

    @media screen and (max-width: 320px) {
        width: 240px;
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

    @media screen and (max-width: 280px) {
      width: 200px;
    }

    @media screen and (max-width: 320px) {
        width: 240px;
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

    @media screen and (max-width: 280px) {
      width: 200px;
    }

    @media screen and (max-width: 320px) {
        width: 240px;
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

    @media screen and (max-width: 280px) {
      width: 200px;
    }

    @media screen and (max-width: 320px) {
        width: 240px;
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
   
} */

`;

