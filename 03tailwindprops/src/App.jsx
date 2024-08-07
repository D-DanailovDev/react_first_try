import "./App.css";
import Card from "./components/Card";

let myArr = [1, 2, 3, 4, 5, 6, 7, 8];

function App() {
  return (
    <>
      <Card
        title="Noteworthy technology acquisitions 2021"
        info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, amet?"
      />
      <Card
        title="Noteworthy technology acquisitions 2022"
        info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, amet?"
      />
      <Card myArr={myArr} />
    </>
  );
}

export default App;
