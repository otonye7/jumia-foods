import styled from 'styled-components';


export const FilterContainer = styled.div`
   height: 100%;
   
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
        display: inline-block;
      }
  }
  
  .select {
      width: 120%;
      height: 7vh;

      @media screen and (max-width: 800px) {
        margin-top: 1rem;
        width: 115%;
      }
  }
`;