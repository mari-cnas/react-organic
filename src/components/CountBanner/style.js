import styled from 'styled-components'
import cogumelos from '../../assets/cogumelos.jpg'

export const BannerContainer = styled.section`

background-image: url(${cogumelos});
background-color: rgba(0, 0, 0, 0.7);
background-size: 100%;
background-blend-mode: darken;



h2{
    font-family: inherit;
    background-color: transparent;
    color: white;
    font-size: 40px;
    font-weight: 700;
    text-align: center;
   

}
h3{
    font-family: inherit;
    background-color: transparent;
    color: white;
    font-size: 23px;
    font-weight: 400;
    text-align: center;
    line-height: 1.1;

}
`