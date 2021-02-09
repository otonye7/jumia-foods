import styled  from 'styled-components';

export const CategoriesContainer = styled.div `
width: 100vw;


.heading {
   display: flex;
   margin: 0px;
}

.arrow {
   display: flex;
   justify-content: center;
   margin-top: 4.5rem;
   cursor: pointer;
}

.categories-items {
   flex-direction: column;
   display: flex;

   @media screen and (max-width: 800px) {
      
   }
}

.preview {
    display: flex;
    justify-content: space-around;
    width: 100%;

    @media screen and (max-width: 800px) {
      width: 100%;
      display: flex;
      overflow-y: hidden;
      overflow-x: scroll;
      object-fit: contain;
      transition: transform 450ms;
      margin-right: 10px;
  }
 }
    
`;