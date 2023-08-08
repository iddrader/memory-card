import elements from "../assets/PeriodicTableJSON.json";
import "../styles/Game.css";
import Card from './Card.jsx';

export default function Game(props) {
  const handleClick = props.handleAddUsedElement;
  const usedElements = props.usedElements;

  const elementsToShow = [];
  let repeatingElements = 0;
  for (let i = 0; i < 6; i++) {
    const newElement = elements.elements[Math.floor(Math.random() * 100)];
    if (usedElements.includes(newElement.symbol)) repeatingElements += 1;
    if (repeatingElements === 6) {
      i -= 1;
      repeatingElements -= 1;
    } else {
      elementsToShow.push(newElement);
    }
  }

  return (
    <div className="game">
        {elementsToShow.map((element) => (
            <Card key={element} element={element} onClick={handleClick}/>
        ))}
    </div>
  );
}
