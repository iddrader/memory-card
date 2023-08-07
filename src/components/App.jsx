import Game from "./Game.jsx";
import Header from "./Header.jsx";
import { useState } from "react";
import "../styles/App.css";

export default function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [usedElements, setUsedElements] = useState([]);

  function handleAddUsedElement(event) {
    if (usedElements.includes(event.target.dataset.symbol)) {
      console.log(usedElements);
      console.log(event.target.dataset.symbol);
      bestScore < score ? setBestScore(score) : setBestScore(bestScore);
      setScore(0);
      setUsedElements([]);
      return;
    }
    setUsedElements((prevUsedElements) => [
      ...prevUsedElements,
      event.target.dataset.symbol,
    ]);
    setScore(score + 1);
  }

  return (
    <div className="page-body">
      <Header score={score} bestScore={bestScore} />
      <Game
        usedElements={usedElements}
        handleAddUsedElement={handleAddUsedElement}
      />
    </div>
  );
}
