import styled from 'styled-components';

export const KfcContainer = styled.div`
width: 100%;
position: absolute;
top: 120px;
/* width: 1350px; */
@media screen and (max-width: 767px){
    margin-top: 1.5rem;
    
}


 .cover-image {
     width: 100%;
     height: 14rem;
 }

 img {
    width: 100%;
    height: auto;
} 

.text {
    width: 85%;
    margin: 0 auto;

    @media screen and (max-width: 767px){
    width: 100%;
    
}
}

.border {
    border-bottom: 8px solid #F2F2F2;
}

.border-line {
    border-bottom: 4px solid #F2F2F2;
}

.header {
    width: 87%;
    margin: 0 auto;

    @media screen and (max-width: 767px){
    width:100%;
}
}

.header-links {
    text-decoration: none;
    color: black;
    padding: 1rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.125;
    font-family: Muli,Merriweather,Georgia,serif;
}
`;