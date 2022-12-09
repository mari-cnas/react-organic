import styled from 'styled-components'
import leaves from '../../assets/leaves.png'

export const BannerContainer = styled.section`

background-image: url(${leaves});
background-color: rgba(0, 0, 0, 0.5);
background-repeat: no-repeat;
background-size: 100%;
height:500px;
background-blend-mode: darken;


h3{
    font-family: roboto,serif;
    background-color: transparent;
    color: white;
    font-size: 23px;
    font-weight: 400;
    text-align: center;
    text-shadow: 0.05em 0.05em black
   

}
h2{
    font-family: playfair display,serif;
    background-color: transparent;
    color: white;
    font-size: 70px;
    font-weight: 400;
    text-align: center;
    text-shadow: 0.05em 0.05em black
  

}

@media (max-width:768px) {
  h2{
    font-size: 35px;
    
  }
  height:250px;
}
`;

