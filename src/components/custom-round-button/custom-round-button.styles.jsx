import styled from 'styled-components';


const defaultButtonWidth = '20px';

export const CustomRoundButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    cursor: pointer;
    font-size: 12px;
    .round-btn {
        border-radius: 50px;
        width: ${({ buttonWidth }) => buttonWidth ? buttonWidth : defaultButtonWidth};
        height: ${({ buttonWidth }) => buttonWidth ? buttonWidth : defaultButtonWidth};
        background-color: orange;
        font-size: ${({ fontSize }) => fontSize ? fontSize : '10px'};
        font-weight: ${({ fontWeight }) => fontWeight ? fontWeight : 'normal'};
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: ${({ buttonMargin }) => buttonMargin ? buttonMargin: '0 5px 0 5px'};
    }
    span {
        align-self: center;
        color:white;
	)};
    }

    background-color: orange;
    border-radius: 25px;
`;