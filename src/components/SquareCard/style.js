import styled from 'styled-components'


export const SquareCardContainer = styled.div`

border:1px solid #d3d3d3;

#stitle{
    font-family: playfair display,serif;
    font-size: 23px;
    font-weight: 500;


}

#stext{
    font-family:  roboto,sans-serif;
    font-size: 15px;
    font-weight: 500;
    color: #666;
}


`;

export const IconContainer = styled.div`
color:white;
border-color:white;


&:hover{
    color:grey;
    
}

span:hover{
    border: 1px solid #dddddd;
}
`;

export const ColoredDiv = styled.div`


background-color:${(props)=> props.backgroundColor}

`;


