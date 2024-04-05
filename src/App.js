import "./App.css";
import HelloWorld from "./components/HelloWord";

function App() {
  const name = "Tainu";
  return (
    <div className="App">
      <h1>Olá {name}!</h1>
      <HelloWorld />
    </div>
  );
}

export default App;
