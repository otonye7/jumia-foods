import styled from 'styled-components';


export const SubHeaderContainer = styled.div`
width: 100%;
display: flex;
justify-content: space-around;


.logo {
    margin-top: 6rem;
    align-self: center;
  }

  .navbar {
    width: 100%;
  }

  .nav-container {
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow-y: hidden;

    @media screen and (max-width: 800px) {
        width: 40%;
      }
  }
   
  

  .nav-options {
    padding: 25px 28px;
    text-decoration: none;
    color: black;
    overflow-y: hidden;
  }

  .buttons {
    display: flex;
  }
`;