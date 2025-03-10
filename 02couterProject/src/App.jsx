import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(5);
  // let value = 5;

  const addValue = () => {
    if (value >= 20) {
      setValue(20);
    } else {
      setValue(value + 1);
    }
  };

  const removeValue = () => {
    if (value <= 0) {
      setValue(0);
    } else {
      setValue(value - 1);
    }
  };

  return (
    <>
      <h1>chai aur react</h1>
      <h2>couter value : {value}</h2>

      <button onClick={addValue}>increase value {value}</button>
      <br />
      <button onClick={removeValue}>decrease value {value}</button>
      <p>footer {value}</p>
    </>
  );
}

export default App;
