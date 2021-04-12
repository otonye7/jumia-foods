import styled from 'styled-components';


export const MenuItemContainer = styled.div`
 width: 85%;
 margin: 0 auto;
 display: flex;

  @media screen and (max-width: 767px){
    width:100%;
    
}

.menu-items {
      
      width: 30%;
      max-width: 150px;
      display: flex;
      flex-direction: column;
      height: 140px;
      align-items: center;
      padding-bottom: 0.7rem;

      
   @media screen and (max-width: 767px){
      width: 40%;
      max-width: 130px;
      height: 120px;
} 
 
}

.background-image {
      width: 100%;
      max-width: 500px; 
      overflow: hidden;
      height: 100%;
      max-height: 250px;
      background-size: cover;
      background-position: center;
  }

  .extra {
    padding: 0.9rem;

   @media screen and (max-width: 767px){
      padding: 0.2rem;
} 
  }

  .contents {
    width: 30%;
    padding-left: 1rem;

    

  @media screen and (max-width: 767px){
    width:58%;
    display: flex;
    flex-direction: column;
    
}
  }

  .sub-contents {
    align-items: center;
  }

  .add {
    color: orange;
  @media screen and (max-width: 767px){
      display: none;
   }
  }

  .icon {
    width: 25%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 6rem;

    @media screen and (max-width: 767px){
    width:14%;
    
}
  }

  /* .border {
    border-bottom: 8px solid #F2F2F2;
  } */

  .title {
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.125;
    font-family: Muli,Merriweather,Georgia,serif;
  }

  .extra {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.125;
    font-family: Muli,Merriweather,Georgia,serif;
  }

  .pieces {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.125;
    font-family: Muli,Merriweather,Georgia,serif;
  }
`;