import styled from 'styled-components'

export const BlogCardContainer = styled.div`
    background-color:#f5f5f5;
   
    font-family: roboto,sans-serif;
    
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
   
 
   @media (min-width:320px) { 
    height:100%;}


    @media (min-width:1024px) { 
        height:60%;
        width:auto;}
`;

