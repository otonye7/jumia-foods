import styled from 'styled-components';


export const MenuItemContainer = styled.div`
 width: 85%;
 margin: 0 auto;
 display: flex;
 max-width: 1200px;


  .menu-items {
      width: 60%;
      justify-content: space-between;
      display: flex;
      height: 250px;
      align-items: center;

  /* @media screen and (max-width: 767px){
    width:100%;
    display: flex;
    flex-direction: column;
    
} */

.par {
  display: flex;
} 

.extra {
  padding: 0.5rem;
}

.title {
  padding: 0.5rem;
}



  .background-image {
      width: 100%;
      max-width: 180px; 
      overflow: hidden;
      height: 100%;
      max-height: 150px;
      background-size: cover;
      background-position: center;
  }

  .add-icon {
    display: flex;
    justify-content: space-between;
  }

 .add {
     color: #f68b1e;
 }

 .price {
   margin-right: 0.6rem;
 }

 .add-border {
   border: 2px solid #f68b1e;
   height: 1.4rem;
 }

 /* .price {
   margin-bottom: 2rem;
 } */
`;