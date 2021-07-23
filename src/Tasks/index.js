import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <div className="section__tasksContainer">
        <ul className="section__tasksList">
            {tasks.map(({ done, content, id }) => (
                <li
                    key={id}
                    className={`section__tasksListItem ${done && hideDone ? "section__tasksListItem--hidden" : ""}`}
                >
                    <button
                        className={`section__taskButton section__taskButton--checked`}
                        onClick={() => toggleTaskDone(id)}
                    >
                        {done ? "✔" : ""}
                    </button>
                    <span className={`section__task ${done ? "section__task--completed" : ""}`}>
                        {content}
                    </span>
                    <button
                        className={`section__taskButton section__taskButton--deleted`}
                        onClick={() => removeTask(id)}
                    >
                        🗑
                    </button>
                </li>
            ))
            }
        </ul >
    </div >
);

export default Tasks;
