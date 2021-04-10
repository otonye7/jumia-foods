import styled from 'styled-components';


export const MenuItemContainer = styled.div`
 width: 85%;
 margin: 0 auto;
 display: flex;

  @media screen and (max-width: 767px){
    width:100%;
    
}

.menu-items {
      
      width: 35%;
      max-width: 150px;
      display: flex;
      flex-direction: column;
      height: 140px;
      align-items: center;
      padding-bottom: 0.7rem;
 
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
    align-items: center;

  @media screen and (max-width: 767px){
    width:58%;
    display: flex;
    flex-direction: column;
    
}
  }

  .sub-contents {
    align-items: center;
  }

  .icon {
    width: 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;


    @media screen and (max-width: 767px){
    width:14%;
    
}
  }
`;