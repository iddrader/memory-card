import elements from '../assets/PeriodicTableJSON.json';
import '../styles/Game.css';

export default function Game(props) {
    const handleClick = props.handleAddUsedElement;
    const usedElements = props.usedElements;

    const elementsToShow = [];
    let repeatingElements = 0;
    for(let i = 0; i < 6; i++) {
        const newElement = elements.elements[Math.floor(Math.random()*100)];
        if(usedElements.includes(newElement.symbol))
            repeatingElements += 1;
        if(repeatingElements === 6) {
            i -= 1;
            repeatingElements -= 1;
        } else {
            elementsToShow.push(newElement)
        }
    }


    return(
        <div className="game">
            <div className="card" onClick={handleClick}>
                <div className='symbol'>{elementsToShow[0].symbol}</div>
                <div className='element'>{elementsToShow[0].name}</div>
            </div>
            <div className="card" onClick={handleClick}>
                <div className='symbol'>{elementsToShow[1].symbol}</div>
                <div className='element'>{elementsToShow[1].name}</div>
            </div>
            <div className="card" onClick={handleClick}>
                <div className='symbol'>{elementsToShow[2].symbol}</div>
                <div className='element'>{elementsToShow[2].name}</div>
            </div>
            <div className="card" onClick={handleClick}>
                <div className='symbol'>{elementsToShow[3].symbol}</div>
                <div className='element'>{elementsToShow[3].name}</div>
            </div>
            <div className="card" onClick={handleClick}>
                <div className='symbol'>{elementsToShow[4].symbol}</div>
                <div className='element'>{elementsToShow[4].name}</div>
            </div>
            <div className="card" onClick={handleClick}>
                <div className='symbol'>{elementsToShow[5].symbol}</div>
                <div className='element'>{elementsToShow[5].name}</div>
            </div>
        </div>
    )
}