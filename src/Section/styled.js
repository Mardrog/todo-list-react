import styled from "styled-components";

export const StyledSectionContainer = styled.div`
    display: flex;
    background-color: white;
    background-color: white;
    border-bottom: 1px solid #dddddd;

    @media (max-width:675px) {
        flex-direction: column;
        flex-grow: 1;
    }
`;

export const StyledHeader = styled.h2`
    flex-grow: 1;
    font-size: 30px;
    padding: 20px;
    margin: 0px;
`;