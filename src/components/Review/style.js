import styled, { keyframes } from 'styled-components'

export const MenuOverlay = styled.div`
    opacity: ${props => props.isMenuOpened ? 1 : 0};
    visibility: ${props => props.isMenuOpened ? "visible" : "hidden"};
    animation: ${props => props.isMenuOpened ? fadeIn : fadeOut} 0.2s ease-out;
    background-color: rgba(0,0,0,0.5);
    transition: all 0.2s ease-out;
    z-index: 5;
    top:0;
    height:100vh;
`