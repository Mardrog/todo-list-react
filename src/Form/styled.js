import styled from "styled-components";

export const StyledForm = styled.form`
    background-color: white;
    display: flex;
    padding: 20px;
    margin-bottom: 10px;

    @media (max-width:580px) {
        display: flex;
        flex-direction: column;
        padding: 10px;
    }
`;

export const StyledInput = styled.input`
    margin-right: 20px;
    padding: 10px;
    flex-grow: 1;
    border: 1px solid #dddd;

    @media (max-width:580px){
        margin: 10px;
    }
`;

export const StyledNewTaskButton = styled.button`
    padding: 10px 30px 10px 30px;
    color: white;
    background-color: hsl(180, 100%, 25%);
    border: none;
    transition: 0.5s;
    
    &:hover{
        background-color: hsl(180, 100%, 35%);
        transform: scale(1.1);
    }

    @media (max-width:580px){
        margin: 10px;

        &:hover{
            transform: scale(1.05);
        }
    }
`;


