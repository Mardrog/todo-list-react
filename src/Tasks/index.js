import { StyledTasksLisItem, StyledTasksList, StyledTaskButton, StyledTask } from "./styled"

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <div>
        <StyledTasksList>
            {tasks.map(({ done, content, id }) => (
                <StyledTasksLisItem
                    key={id}
                    hidden={done && hideDone}
                >
                    <StyledTaskButton
                        left
                        onClick={() => toggleTaskDone(id)}
                    >
                        {done ? "✔" : ""}
                    </StyledTaskButton>
                    <StyledTask
                        completed={done}
                    >
                        {content}
                    </StyledTask>
                    <StyledTaskButton
                        right
                        onClick={() => removeTask(id)}
                    >
                        🗑
                    </StyledTaskButton>
                </StyledTasksLisItem>
            ))
            }
        </StyledTasksList >
    </div >
);

export default Tasks;
