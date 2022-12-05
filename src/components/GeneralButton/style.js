import styled from 'styled-components'


export const ButtonContainer = styled.button`

    background-color:${(props)=> props.backgroundColor};
    color:${(props)=> props.color};
    border-radius: 25px;
    border: 2px solid #97ae76;
    font-size: 14px;
    padding: 0 37px;
    line-height: 46px;
    align-self: center;

`;