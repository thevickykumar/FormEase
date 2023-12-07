import "./App.css";
import Additional from "./Components/Additional Services/Additional";
import Logistics from "./Components/Logistics/Logistics";
import Parties from "./Components/Parties/Parties";
import Bar from "./Components/Progress Bar/Bar";

function App() {
  return (
    <>
      <Bar />
      <Parties />
      <Bar />
      <Logistics />
      <Bar />
      <Additional />
    </>
  );
}

export default App;
