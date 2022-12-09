import styled from 'styled-components'


export const BannerContainer = styled.section`


h3{
    font-family: playfair display,serif;
    color:white;
    font-size: 35px;
    border-bottom-style:double;
    border-bottom-width: 4px;
    
}

background-image: url(${(props)=> props.backgroundImage});
background-color: rgba(0, 0, 0, 0.5);
background-blend-mode: darken;
height:250px;


`;

