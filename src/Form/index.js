import { useState, useRef } from "react";
import { StyledForm, StyledInput, StyledNewTaskButton } from "./styled";

const Form = ({ addNewTask }) => {
    const [content, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const contentTrimmed = content.trim()

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (!contentTrimmed) {
            return;
        }
        addNewTask(contentTrimmed);
        setNewTaskContent("");
    };

    const focusInput = () => {
        inputRef.current.focus();
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
                ref={inputRef}
            />
            <StyledNewTaskButton onClick={focusInput}>Dodaj zadanie</StyledNewTaskButton>
        </StyledForm>
    );
}


export default Form;