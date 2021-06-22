import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Container from "./Container";
import Header from "./Header";

const tasks = [
  { id: 1, content: "Zabrać się za zadanie z tygodnia 8", done: true },
  { id: 2, content: "Odrobić zadanie z tygodnia 8", done: false },
];

const hideDoneTasks = false;

function App() {
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
        buttonsContainer={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        tasksContainer={
          <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
        }
      />
    </Container>
  );
}

export default App;