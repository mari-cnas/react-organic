import styled from 'styled-components'
import cover1 from '../../assets/coverbelow0.jpg'

export const HomeContainer = styled.section`

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