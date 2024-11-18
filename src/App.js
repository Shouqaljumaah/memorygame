import Cards from "./component/Cards";
import cardsData from "./component/cardsData";
import "./App.css";
// import cardslist from "./component/CardList";
import { useState } from "react";

function App() {
  // const [counter, setCounter] = useState(0);
  const cardslist = cardsData.map((card, index) => <Cards mycard={card} />);

  // const playAgain = () => {
  //   if ()
  //   setCounter(0);
  // };

  return (
    <div>
      <div className="App">
        <h1>Magic Cards</h1>
        {/* <img src={cardsData}></img> */}
        <button> Paly Again</button>
        <div className="flex1">{cardslist}</div>
      </div>
    </div>
  );
}

export default App;
