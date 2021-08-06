import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Container from "./Container";
import Header from "./Header";
import Timer from "./Date";
import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components"
import { blueTheme, redTheme } from "./themes";

function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => (
      {
        ...task,
        done: true,
      }
    )));
  };

  const addNewTask = (content) => {
    setTasks(tasks => [
      ...tasks,
      {
        content,
        done: false,
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      }
    ])
  };

  return (
    <ThemeProvider theme={redTheme}>
      <Container>
        <Header
          title="Lista zadań"
        />
        <Section
          timer={
            <Timer />
          }
          header="Dodaj nowe zadanie"
          formContainer={
            <Form
              addNewTask={addNewTask}
              tasks={tasks}
              setTasks={setTasks}
            />
          }
        />
        <Section
          header="Lista zadań"
          buttonsContainer={
            <Buttons
              tasks={tasks}
              hideDone={hideDone}
              toggleHideDone={toggleHideDone}
              setAllDone={setAllDone}
            />}
          tasksContainer={
            <Tasks
              tasks={tasks}
              hideDone={hideDone}
              removeTask={removeTask}
              toggleTaskDone={toggleTaskDone}
            />
          }
        />
      </Container>
    </ThemeProvider>
  );
}

export default App;