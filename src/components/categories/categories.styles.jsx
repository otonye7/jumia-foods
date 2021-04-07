import styled  from 'styled-components';

export const CategoriesContainer = styled.div `
width: 98%;
margin: 0 auto;
max-width: 1300px;
margin: 0 auto;

 @media screen and (max-width: 767px){
    width: 100%;
} 

  .categories-items {
    width: 100%;
    display: flex;
    flex-direction: column;
    
    @media screen and (max-width: 767px){
     width: 98%;
} 
  }

  .preview {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 10px;

 @media screen and (max-width: 767px){
      display: grid;
      grid-template-columns: 1fr;
} 
  }

.fastfood-text {
   color: #4a4a4a;
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.125;
    font-family: Muli,Merriweather,Georgia,serif;
}
    
`;