import elements from "../assets/PeriodicTableJSON.json";
import "../styles/Game.css";

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
      <div
        className="card"
        onClick={handleClick}
        data-symbol={elementsToShow[0].symbol}
      >
        <div className="symbol" data-symbol={elementsToShow[0].symbol}>
          {elementsToShow[0].symbol}
        </div>
        <div className="element" data-symbol={elementsToShow[0].symbol}>
          {elementsToShow[0].name}
        </div>
      </div>
      <div
        className="card"
        onClick={handleClick}
        data-symbol={elementsToShow[1].symbol}
      >
        <div className="symbol" data-symbol={elementsToShow[1].symbol}>
          {elementsToShow[1].symbol}
        </div>
        <div className="element" data-symbol={elementsToShow[1].symbol}>
          {elementsToShow[1].name}
        </div>
      </div>
      <div
        className="card"
        onClick={handleClick}
        data-symbol={elementsToShow[2].symbol}
      >
        <div className="symbol" data-symbol={elementsToShow[2].symbol}>
          {elementsToShow[2].symbol}
        </div>
        <div className="element" data-symbol={elementsToShow[2].symbol}>
          {elementsToShow[2].name}
        </div>
      </div>
      <div
        className="card"
        onClick={handleClick}
        data-symbol={elementsToShow[3].symbol}
      >
        <div className="symbol" data-symbol={elementsToShow[3].symbol}>
          {elementsToShow[3].symbol}
        </div>
        <div className="element" data-symbol={elementsToShow[3].symbol}>
          {elementsToShow[3].name}
        </div>
      </div>
      <div
        className="card"
        onClick={handleClick}
        data-symbol={elementsToShow[4].symbol}
      >
        <div className="symbol" data-symbol={elementsToShow[4].symbol}>
          {elementsToShow[4].symbol}
        </div>
        <div className="element" data-symbol={elementsToShow[4].symbol}>
          {elementsToShow[4].name}
        </div>
      </div>
      <div
        className="card"
        onClick={handleClick}
        data-symbol={elementsToShow[5].symbol}
      >
        <div className="symbol" data-symbol={elementsToShow[5].symbol}>
          {elementsToShow[5].symbol}
        </div>
        <div className="element" data-symbol={elementsToShow[5].symbol}>
          {elementsToShow[5].name}
        </div>
      </div>
    </div>
  );
}
