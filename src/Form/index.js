import { useState } from "react";
import { StyledForm, StyledInput, StyledNewTaskButton } from "./styled";

const Form = ({ addNewTask }) => {
    const [content, setNewTaskContent] = useState("");

    const contentTrimmed = content.trim()

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (!contentTrimmed) {
            return;
        }
        addNewTask(contentTrimmed);
        setNewTaskContent("");
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <StyledInput
                name="section__newTaskButton"
                placeholder="Co jest do zrobienia?"
                autoFocus
                required
                value={content}
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <StyledNewTaskButton>Dodaj zadanie</StyledNewTaskButton>
        </StyledForm>
    );
}


export default Form;