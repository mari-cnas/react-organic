import styled from 'styled-components'
import folhas from '../../assets/folhas.png'

export const BannerContainer = styled.section`
  background-image: url(${folhas});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: cover;
  height:700px;

  @media (max-width:767px) {
    & {
      height: 150px;
    }
  }
`;

