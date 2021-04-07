import styled from 'styled-components';

export const ResturantContainer = styled.div`
width: 98%;
margin: 0 auto;
display: flex;
justify-content: space-between;

@media screen and (max-width: 767px){
      display: flex;
      flex-direction: column;
}

.terms {
    color: #4a4a4a;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.125;
    font-family: Muli,Merriweather,Georgia,serif;
}
}
`;