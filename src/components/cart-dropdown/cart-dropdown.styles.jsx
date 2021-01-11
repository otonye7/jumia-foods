import styled  from 'styled-components';

export const CartDropDownContainer = styled.div `
.cart-dropdown {
    position: absolute;
    width: 240px;
    height: 280px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 110px;
    right: 40px;
    z-index: 5;

    .empty-message {
        font-size: 18px;
        margin: 50px auto;
    }

    .cart-items {
        height: 240px;
        display: flex;
        flex-direction: column;
        overflow: scroll;
    }

  .button {
  margin-top: auto;
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
  width: 100%;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
}
    }
}
`;