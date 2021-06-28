import "./style.css";

const Tasks = ({ tasks, hideDoneTasks, done }) => (
    <div className="section__tasksContainer">
        <ul className="section__tasksList">
            {tasks.map(({ id, done, content }) => (
                <li key={id}
                    className={`section__tasksListItem ${hideDoneTasks && done ? "section__tasksListItem--hidden" : ""}`}
                >
                    <button className={`section__taskButton section__taskButton--checked`}>
                        {done ? "✔" : ""}
                    </button>
                    <span className={`section__task ${done ? "section__task--completed" : ""}`}>
                        {content}
                    </span>
                    <button className={`section__taskButton section__taskButton--deleted`}>
                        🗑
                    </button>
                </li>
            ))
            }
        </ul >
    </div>
);

export default Tasks;
