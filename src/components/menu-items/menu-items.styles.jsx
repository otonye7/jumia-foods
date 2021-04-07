import styled from 'styled-components';


export const MenuItemContainer = styled.div`

 
@media screen and (max-width: 767px){
    
}
  .menu-items {
      width: 100%;
      max-width: 600px;
      display: flex;
      flex-direction: column;
      height: 250px;
      align-items: center;
      position: relative;

  @media screen and (max-width: 767px){
    width:100%;
    display: flex;
    flex-direction: column;
    
}

      &:hover {
      cursor: pointer;

      & .background-image {
        transform: scale(1.1);
        transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      }

      & .content {
        opacity: 0.9;
      }
    }
    

    &.large {
      height: 380px;
    }
  
    &:first-child {
      margin-right: 7.5px;
    }
  
    &:last-child {
      margin-left: 7.5px;
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

/* @media screen and (max-width: 767px){
    width: 100%;
    height:80%;
    margin: 0 auto;
} */

  }

  &:hover {
    .image {
        opacity: 0.6;
    }
}

  .content {
      width: 90%;
      height: 25%;
      display: flex;
    flex-direction: column;
      font-size: 17px;

  /* @media screen and (max-width: 767px){
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
} */

  }

.other {
    display: flex;
    justify-content: space-between;
    width: 98%;
    font-size: 15px;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.125;
    font-family: Muli,Merriweather,Georgia,serif;
}

.title {
    width: 100%;
    margin-bottom: 15px; 
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.125;
    font-family: Muli,Merriweather,Georgia,serif;
}

.price {
    font-size: 15px;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.125;
    font-family: Muli,Merriweather,Georgia,serif;
}
`;