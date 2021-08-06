import styled, { css } from "styled-components";

export const StyledButtonContainer = styled.div`
    background-color: white;
    padding: 20px;
    border-bottom: 1px solid #dddddd;

    @media (max-width:${({ theme }) => theme.breakpoints.mobile}px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    `;

export const StyledButtons = styled.button`
    font-size: 20px;
    border: none;
    background: none;
    color: ${({ theme }) => theme.colors.mainColor};
    transition: 0.5s;

    ${({ left }) => left && css`
    padding-right: 30px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        padding: 0px;
        margin-bottom: 30px;
    }
    `}

    &:hover {
        color: ${({ theme }) => theme.colors.hoverColor};
    }

    &:disabled {
    color: ${({ theme }) => theme.colors.disabledColor};
    font-size: 20px;
    border: none;
    background: none;
    }
`;
