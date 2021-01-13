import styled from 'styled-components';


export const BrowseContainer = styled.div`

.menu-items {
    width: 20vw;
    display: flex;
    flex-direction: column;
    height: 200px;
    align-items: center;
    position: relative;
}

.background-image {
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
}

.cart-button {
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: orange;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  width: 102%;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
}




&:hover {
    cursor: pointer;

    & .background-image {
      opacity: 0.6;
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    

    & .content {
      opacity: 0.9;
    }
  }

.content {
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;

    .title {
        width: 90%;
        margin-bottom: 15px;
    }

    .price {
        width: 10%;
    }
`;