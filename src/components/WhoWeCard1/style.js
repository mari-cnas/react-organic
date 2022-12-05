import styled from 'styled-components'

export const BlogCardContainer = styled.div`


h5{
    font-family: playfair display,serif;
    font-size: 35px;
    color: #333;

   
}
p{
    font-family: roboto,sans-serif;
    color: #666;
    font-size: 14px;
    font-weight: 400;
    line-height:26px;
}

.top-and-bottom {
  position: relative;
  margin-top: 30px;
  margin-bottom: 30px;

  &::after {
  content:'';
  height: 2px;
    width: 70px;
    background-color: #97ae76;
    position: absolute;
    bottom: -25px;
    left: 0;
}
}
`;

export const CardImg = styled.div`
background-image: url(${(props) => props.backgroundImage});
width: 50%;
background-size: cover;
background-position: center center;
`;