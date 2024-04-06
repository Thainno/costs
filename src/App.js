import { useState } from "react";
import "./App.css";
import SeuNome from "./components/SeuNome";

function App() {
  const [nome, setNome] = useState();

  return (
    <div className="App">
      <h1>State Lift</h1>
      <SeuNome setNome={setNome} />
      <div>{nome}</div>
    </div>
  );
}

export default App;
