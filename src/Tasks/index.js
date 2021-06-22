import "./style.css";

const Tasks = ({ tasks, hideDoneTasks, done }) => (
    <div className="section__tasksContainer">
        <ul className="section__tasksList">
            {tasks.map(task => (
                <li
                    className={`section__tasksListItem ${hideDoneTasks && done ? "section__tasksListItem--hidden" : ""}`}
                >
                    <button className={`section__taskButton section__taskButton--checked`}>
                        {task.done ? "✔" : ""}
                    </button>
                    <span className={`section__task js-task ${task.done ? "section__task--completed" : ""}`}>
                        {task.content}
                    </span>
                    <button className={`section__taskButton section__taskButton--deleted`}>
                        🗑
                    </button>
                </li>
            ))}
        </ul >
    </div>
);

export default Tasks;
