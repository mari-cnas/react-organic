import styled from 'styled-components'
import cover1 from '../../assets/coverbelow0.jpg'
import cover2 from '../../assets/coverbelow1.jpg'
import cover3 from '../../assets/coverbelow2.jpg'
import cover4 from '../../assets/coverbelow3.jpg'

export const BannerContainer = styled.section`

background-image: url(${cover1,cover2,cover3,cover4});
background-repeat: no-repeat;
background-size: 100%;
height:345px;


#txtbanner1{
    font-family: roboto,serif;
    background-color: transparent;
    color: white;
    font-size: 23px;
    font-weight: 400;
    text-align: center;
   

}
#txtbanner2{
    font-family: playfair display,serif;
    background-color: transparent;
    color: white;
    font-size: 70px;
    font-weight: 400;
    text-align: center;
  

}

`;

