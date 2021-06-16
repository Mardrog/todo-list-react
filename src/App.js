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
      <Header />
      <Section
        header={<h2 className="section__header">Dodaj nowe zadanie</h2>}
        extraFormContainer={<Form />}
      />
      <Section
        extraContainer={
          <div className="section__container">
            <h2 className="section__header">Lista zadań </h2>
            <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
          </div>
        }
        extraTasksContainer={<div className="section__tasksContainer">
          <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
        </div>}
      />
    </Container>
  );
}

export default App;