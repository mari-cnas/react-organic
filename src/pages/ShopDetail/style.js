import styled from 'styled-components'



export const HeartBtn = styled.button`


    background-color: transparent;
    color: #97ae76;
    border: 2px solid #97ae76;
    font-size: 14px;
    padding: 0 37px;
    line-height: 46px;
    align-self: start;

    &:active{
        background-color: #97ae76;
    color: white;
    }
`;

export const ShopTitle = styled.h2`

    font-family: playfair display,serif;
    color: #333;
    font-size: 35px;
    font-weight: 400;
    text-align: start;

`;


export const ShopContainer = styled.main`


a {
    text-decoration: none;
    color:  #97ae76;
  }

input {  
    border: 1px solid #97ae76;
    max-width:70px;
    text-align: center;
    &:focus{
        outline: none;
    }
}

h2{
    font-family: playfair display,serif;
    color: #333;
    font-size: 35px;
    font-weight: 400;
    text-align: center;

}
`;

export const LessBtn = styled.button`
    border: 1px solid #97ae76;
    background-color: #00000000;
    color: #333;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 11px;
    padding-bottom: 11px;
    font-weight: 700;
    transition: 500ms;
    &:hover{
        background-color: #97ae76 ;
    }
`


export const AddBtn = styled.button`
    border: 1px solid #97ae76;
    background-color: #00000000;
    color: #333;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 11px;
    padding-bottom: 11px;
    font-weight: 700;
    transition: 500ms;
    &:hover{
        background-color: #97ae76 ;
    }
`
