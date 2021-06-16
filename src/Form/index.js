import "./style.css";

const Form = () => (
    <form className="section__form">
        <input
            name="section__newTaskButton"
            className="section__input"
            placeholder="Co jest do zrobienia?"
            autofocus required />
        <button
            className="section__newTaskButton">Dodaj zadanie
        </button>
    </form>
);

export default Form;