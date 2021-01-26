import styled from 'styled-components';


export const FilterContainer = styled.div`
   height: 100%;
   width: 100%;
   
  .container {
   display: flex;
   justify-content: flex-start; 
  }

  .delivery-text {
      font-weight: 34;
  }

  .sort {
      display: flex;
      justify-content: space-between;

      @media screen and (max-width: 800px) {
        display: block;
      }

      
  }
  
  .select {
      width: 360px;
      height: 40px;
      display: flex;
      justify-content: space-between;

      @media screen and (max-width: 800px) {
        margin-top: 1rem;
        width: 300px;
      }

      
    @media screen and (min-width: 500px) and (max-width: 800px){
       width: 530px;
    }

   
  }

  
`;