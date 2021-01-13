import styled from 'styled-components';


export const BrowseContainer = styled.div`

.menu-items {
    width: 50vw;
    display: flex;
    flex-direction: column;
    height: 400px;
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

&:hover {
    .image {
        opacity: 0.6;
    }

    .custom-button {
        opacity: 0.65;
        display: flex;
    }
}

.add-button {
    width: 80%;
    opacity: 0.5;
    position: absolute;
    top: 255px;
    display: none;
    min-width: 10px;
    border-radius: 5px;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 28px;
    padding: 0 18px 0 18px;
    font-size: 12px;
    background-color: black;
    color: black;
    border: none;
    outline: none;
    cursor: pointer;
    position: absolute;
    top: 255px;
}


.content {
    width: 50vw;
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