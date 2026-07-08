import { useState } from "react";
import StudyForm from "./components/studyForm";
import StudyList from "./components/studyList";

function App() {
  const [studies, setStudies] = useState([]);
  const [study, setStudy] = useState("");

  function handleChange(event) {
    setStudy(event.target.value);
  }

  function handleRemoveStudy(idToRemove) {
    setStudies(studies.filter((study) => study.id !== idToRemove));
  }
  function handleAddStudy() {
    if (study.trim() === "") {
      alert("Você não pode adicionar um campo vazio!");
      return;
    }

    const newStudy = {
      id: Date.now(),
      name: study,
      completed: false,
    };

    setStudies([...studies, newStudy]);
    setStudy("");
  }

  return (
    <>
      <main>
        <h1>Gerenciador de Estudos</h1>
        <p> Total de estudos: {studies.length}</p>
        <p> Voce esta digitando: {study}</p>

        <StudyForm
          study={study}
          handleChange={handleChange}
          handleAddStudy={handleAddStudy}
        />

        <StudyList handleRemoveStudy={handleRemoveStudy} studies={studies} />
      </main>
    </>
  );
}

export default App;
