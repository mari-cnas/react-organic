import styled from 'styled-components'


export const CartContainer = styled.section`

.whitebtn{
    border-radius: 25px;
    border: 2px solid #97ae76;
    font-size: 14px;
    align-self: center;
    background-color:transparent;
    color:#97ae76;
}

.greenbtn{
    border-radius: 25px;
    border: 2px solid #97ae76;
    font-size: 14px;
    align-self: center;
    background-color:#97ae76;
    color:white;
}

h2{
    font-family: playfair display,serif;
    color: #333;
    font-size: 25px;
    font-weight: 400;
    text-align:start;
}




.color{
    background-color:#d2ffea;
}

.cart-total{
    max-width:300px;
}

`

export const BigTable = styled.table`

input{
    border-radius: 25px;
    border: 1px solid #97ae76;
    font-size: 14px;
    text-align: center;
    line-height: 46px;
    align-self: center;
    

    &:focus{
        outline: none;
    }
}
`


export const SmallTable = styled.table`

.product{
    font-family: playfair display,serif;
    font-size: 18px;
    font-weight: 400;
}
    
   

input{

    border-radius: 25px;
    border: 1px solid #97ae76;
    font-size: 14px;
    text-align: center;
    line-height: 46px;
    align-self: center;
    width: 60px;
    height: 28px;

    &:focus{
        outline: none;
    }
}
th{

text-align:start;
}

td{

    text-align:end;
}


`

