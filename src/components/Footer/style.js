import styled from 'styled-components'

export const FooterContainer = styled.section`
font-size:14px;
line-height:40px;

.list{
    list-style: none;
}

li,a,p{
    color: #666;

}

li,p{
    white-space: nowrap
}
h5{
    color: black;

}

background-color: #edf2f5;
`

export const EmailBox = styled.div`
    border: 2px solid #d9d9d9;
    padding: 3px 3px 3px 20px;
    border-radius: 25px;
    font-size: 14px;
    color: #333;

button{
    background-color: #97ae76;
    color: #fff;
    border: 2px solid #97ae76;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    display:flex;
    align-items:center;
    justify-content: center;


}

input{
    background-color:transparent;
    border:0;

    &:focus {
box-shadow: 0 0 0 0;
outline: 0;
}
}

`