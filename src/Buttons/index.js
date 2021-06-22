
import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
    tasks.length > 0 && (
        <div className="section__buttonsContainer">
            <button
                className="section__buttons section__buttons--leftButton">
                {hideDoneTasks === true ? "Pokaż ukończone" : "Ukryj ukończone"}
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