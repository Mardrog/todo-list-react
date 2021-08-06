import styled, { css } from "styled-components";
import { theme } from "../Theme/styled.js";

export const StyledButtonContainer = styled.div`
    background-color: white;
    padding: 20px;
    border-bottom: 1px solid #dddddd;

    @media (max-width:675px) {
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

    @media (max-width:675px) {
        padding: 0px;
        margin-bottom: 30px;
    }
    `}

    &:hover {
        color: hsl(180, 100%, 45%);
    }

    &:disabled {
    color: hsl(0,0%,90%);
    font-size: 20px;
    border: none;
    background: none;
    }
  
    
`;
