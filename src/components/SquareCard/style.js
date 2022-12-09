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

&:hover{
    color:grey;
    svg{
    color:grey;
}
    
}

`;



export const ColoredDiv = styled.div`


background-color:${(props)=> props.backgroundColor}

`;

export const VegetableImg = styled.div`

background-image:${(props) => `url(${props.image})`};
background-size: cover;
background-position: bottom ;
aspect-ratio: 1 / 1;
display:flex;
align-items:end;
justify-content:end;
width:100%;

 svg  {
color:white;
border-color:white;


&:hover{
    border: 1px solid #dddddd;
}

 }
`;


