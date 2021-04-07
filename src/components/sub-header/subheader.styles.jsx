import styled from 'styled-components';


export const SubHeaderContainer = styled.div`
  width: 100%;

  .container {
    width: 96%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }

  .title {
    padding-top: 0.5rem;
  }

  .title-link {
    color: orange;
    text-decoration: none;
    font-size: 26px;
    font-weight: 600;
    font-family: Helvetica, "Helvetica Neue", Arial, "Lucida Grande", sans-serif;
    font-style: normal;
  }

  .cart-container {
    display: flex;
    justify-content: space-around;
  }
  
  .cart-icon {
    /* padding-top: 0.2rem; */
  }

  .help-text {
    padding: 1rem;
    text-decoration: none;
    /* margin-bottom: 2rem; */
    font-size: 17px;
    font-weight: 500;
    color: black;
    font-family: Helvetica, "Helvetica Neue", Arial, "Lucida Grande", sans-serif;
    font-style: normal;
  }
`;