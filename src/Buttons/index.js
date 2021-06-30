
import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone }) => (
    tasks.length > 0 && (
        <div className="section__buttonsContainer">
            <button onClick={toggleHideDone}
                className="section__buttons section__buttons--leftButton">
                {hideDone === true ? "Pokaż ukończone" : "Ukryj ukończone"}
            </button>
            <button
                className="section__buttons section__buttons--rightButton"
                disabled={tasks.every(({ done }) => done)}>
                Ukończ wszystkie
            </button>
        </div>
    )
);

export default Buttons;