import styled from 'styled-components';


export const ServiceContainer = styled.div`
.container {
    display: flex;
    justify-content: flex-start; 
   }

   .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

.card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 35%;
    height: auto;

  }

  img {
    width: 12%;
    height: auto;
   
}
`;

