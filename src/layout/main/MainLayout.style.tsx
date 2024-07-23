import styled from "styled-components";

export const MainContent = styled.div`
    width: 100%;
    height: 100%;
    flex: 1;
    overflow: auto;
    backdrop-filter: blur(5px) brightness(0.85);
    
`

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background: url('background.png');
    background-size: cover;
`