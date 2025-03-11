import "./App.css";
import Card from "./components/card";

function App() {
  let myobj = {
    userName: "chai",
    age:21
  }
  let myArray = [1,2,3,4]
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">tailwind test</h1>
      <Card userName="chaiaurcode" btnText="VisitMe"/>
      <Card userName="testing"/>

    </>
  );
}

export default App;
