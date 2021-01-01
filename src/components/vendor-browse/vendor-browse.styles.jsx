import styled from 'styled-components';


export const BrowseContainer = styled.div`

.vendor-items {
    width: 20vw;
    display: flex;
    flex-direction: column;
    height: 200px;
    align-items: center;
    position: relative;
}

.image {
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
}


&:hover {
    cursor: pointer;

    & .image {
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