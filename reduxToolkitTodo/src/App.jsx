import "./App.css";
import { AddTodo } from "./components/AddTodo";
import { Counter } from "./components/Counter";
import { Todos } from "./components/Todos";

function App() {
  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
      <br />
      <Counter/>
    </>
  );
}

export default App;
