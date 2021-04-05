import styled from 'styled-components';


export const SubscriptionContainer = styled.div`
width: 99%;
background-color: #f68b1e;
margin: 0 auto;

.container {
  align-content: center;
  text-align: center;
}

.subscribe-text {
    color: white;
    text-align: center;
    font-size: 2.3rem;
    font-weight: 600;
    line-height: 1.125;
    font-family: Muli,Merriweather,Georgia,serif;
}

.subscribe-description {
    color: white;
    text-align: center;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.125;
    font-family: Muli,Merriweather,Georgia,serif;
}

.selectone {
  width: 15%;
  height: 4rem;

  @media screen and (max-width: 767px){
     width: 100%;
}
}

/* .form {
  width: 100%;
} */

.form {
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px; 
  box-sizing: border-box; 
  resize: vertical;
}

.firstname {
  width: 18%;
  height: 3.5rem;
}

.sub-container {
  display: flex;
}
/* .overall {
    justify-content: center;
}

.subscribe-container {
  width: 100%;
  text-align: center;
  color: white;
}

.paragraph {
 
}

.sort {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin: 1px;
}

.city-container {
  width: 30%;
  display: flex;
  justify-content: space-around;
  padding-bottom: 1em;
}

.email-container {

}

.select {
    width: 200px;
    height: 40px;
    justify-content: center; 

    @media screen and (max-width: 900px) {
        /* width: 220px; */
      }
} */


`;