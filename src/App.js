import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Container from "./Container";
import Header from "./Header";
import { useState } from "react";


const tasks = [
  { id: 1, content: "Zabrać się za zadanie z tygodnia 8", done: true },
  { id: 2, content: "Odrobić zadanie z tygodnia 8", done: false },
];



function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
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
          <Tasks tasks={tasks} hideDone={hideDone} />
        }
      />
    </Container>
  );
}

export default App;