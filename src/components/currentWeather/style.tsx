import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 16px;
    height: auto;
    @media (max-width: 768px) {
        flex-direction: column;
    };
`