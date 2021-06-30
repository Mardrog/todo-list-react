import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Container from "./Container";
import Header from "./Header";
import { useState } from "react";


function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState(
    [
      { id: 1, content: "Zabrać się za zadanie z tygodnia 8", done: true },
      { id: 2, content: "Odrobić zadanie z tygodnia 8", done: false },
    ]
  );

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done }
      }
      return task;
    }
    ));
  };

  return (
    <Container>
      <Header
        title="Lista zadań"
      />
      <Section
        header="Dodaj nowe zadanie"
        formContainer={<Form />}
      />
      <Section
        header="Lista zadań"
        buttonsContainer={<Buttons tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone} />}
        tasksContainer={
          <Tasks tasks={tasks} hideDone={hideDone} removeTask={removeTask} toggleTaskDone={toggleTaskDone} />
        }
      />
    </Container>
  );
}

export default App;