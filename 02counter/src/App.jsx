import "./App.css";
import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    setCounter(counter + 1);
    console.log(counter);
  };
  const removeValue = () => {
    counter = counter - 1;
    setCounter(counter);
  };

  return (
    <>
      <h1>Some awesome title {counter}</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={addValue}>Add value</button>{" "}
      <button onClick={removeValue}>Remove value</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
