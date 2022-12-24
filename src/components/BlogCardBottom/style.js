import styled from 'styled-components'

export const BlogCardContainer = styled.div`
    font-family: roboto,sans-serif;
    background-color:#f5f5f5;
    color: #333;
    font-size: 14px;
    font-weight: 400;
    border-style:none;
    border-radius: 0px;


h5{
    font-family: playfair display,serif;
    font-size: 18px;
    color: #333;
}

.card-text{
    line-height:1.78571;
}
`;

export const ImgBox = styled.div`
   background-image: url(${(props) => props.image});
   background-size:cover;
   background-position:center;
   

`;