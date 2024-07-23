import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color: transparent;
    border-radius: 4px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2px 4px;
    cursor: pointer;
    &:hover {
        background-color: rgba(72, 72, 74, .05);
    }
`