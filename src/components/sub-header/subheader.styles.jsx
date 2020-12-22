import styled from 'styled-components';


export const SubHeaderContainer = styled.div`
height: 60px;
display: flex;
justify-content: space-between;
width: 100%;

.logo {
    margin-top: 6rem;
    align-self: center;
  }
   
  .navbar {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .nav-options {
    padding: 10px 15px;
    text-decoration: none;
    color: black;
  }

  .buttons {
    display: flex;
    align-self: center;
    justify-content: center;
  }
`;