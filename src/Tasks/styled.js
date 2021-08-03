import styled, { css } from "styled-components";

export const StyledTasksLisItem = styled.li`
    display: flex;
    padding: 10px;
    border-bottom: 1px solid #dddddd;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const StyledTasksList = styled.ul`
    list-style: none;
    background-color: white;
    margin: 0px;
    padding: 0;
`;

export const StyledTaskButton = styled.button`
    height: 30px;
    align-self: center;
    width: 30px;
    border: none;
    padding: 0px;
    color: white;
    transition: 1s;
    flex-shrink: 0;

    ${({ left }) => left && css`
        background-color: hsl(120, 100%, 25%);

        &:hover{
            background-color: hsl(120, 100%, 35%);
        }
    `}

    ${({ right }) => right && css`
        background-color: hsl(0, 100%, 50%);

        &:hover{
            background-color: hsl(0, 100%, 60%);
        }
    `}
`;

export const StyledTask = styled.span`
    flex-grow: 1;
    align-self: center;
    margin-left: 10px;
    margin-right: 10px;
    padding: 20px;

    ${({ completed }) => completed && css`
        text-decoration: line-through;
    `}
`;