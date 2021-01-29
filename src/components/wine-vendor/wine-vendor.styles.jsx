import styled  from 'styled-components';

export const WineContainer = styled.div `
width: 100vw;
height: 100%;


.heading {
   display: flex;
   margin: 0px;
}



.categories-items {
   flex-direction: column;
   display: flex;

   @media screen and (max-width: 800px) {
      display: inline-block;
    }
  
}

.preview {
    display: flex;
    justify-content: space-around;

    @media screen and (max-width: 800px) {
      display: inline-block;
    }
 }
    
`;