import styled from 'styled-components'
import cover1 from '../../assets/coverbelow0.jpg'
import folhas from '../../assets/folhas.png'

export const HomeContainer = styled.div`

h2{
    font-family: playfair display,serif;
    color: #333;
    font-size: 35px;
    font-weight: 400;
    text-align: center;
    
    

}
`

export const Banner1 = styled.div`

background-image: url(${cover1});
background-repeat: no-repeat;
background-size: cover;
background-color: rgba(0, 0, 0, 0.5);
background-blend-mode: darken;
height:270px;
display:flex;
align-self:center;
justify-content:center;
`;

export const BannerContainer = styled.div`
  background-image: url(${folhas});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  opacity: 1;
  visibility: inherit;
  z-index: 20;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
 `;