import styled from 'styled-components'

export const FooterContainer = styled.section`

line-height:40px;

.list{
    list-style: none;
}

li,a,p{
    color: #666;

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
}

`