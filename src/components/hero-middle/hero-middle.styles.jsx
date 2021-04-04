import styled from 'styled-components';



export const HeroContainer = styled.div`
width: 65%;


@media screen and (max-width: 767px){
     width: 100%;
}

.text {
    color: #4a4a4a;
    padding-top: 5rem;
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    line-height: 1.125;
    font-family: Muli,Merriweather,Georgia,serif;
}

.discover {
    color: #4a4a4a;
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
    line-height: 1.125;
    font-family: Muli,Merriweather,Georgia,serif;
}

.delivering {
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    line-height: 1.125;
    font-family: Muli,Merriweather,Georgia,serif;
}

.service {
    font-size: 0.9rem;
    font-weight: 600;
    line-height: 1.125;
    font-family: Muli,Merriweather,Georgia,serif;
}

.telegram {
    color: orange;
    padding-top: 0.7rem;
}

.sub-container {
    display: flex;
}

`;