import { useState } from "react";
import "./style.css";

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
        <form className="section__form" onSubmit={onFormSubmit}>
            <input
                name="section__newTaskButton"
                className="section__input"
                placeholder="Co jest do zrobienia?"
                autoFocus
                required
                value={content}
                onChange={({ target }) => setNewTaskContent(target.value)}
            />

            <button className="section__newTaskButton">Dodaj zadanie</button>
        </form>
    );
}


export default Form;