export default function Card(props) {
    const element = props.element;
    const handleClick = props.onClick;
    return (
        <div
            className="card"
            data-symbol={element.symbol}
            onClick={handleClick}
        >
            <div className="symbol" data-symbol={element.symbol}>
                {element.symbol}
            </div>
            <div className="element" data-symbol={element.symbol}>
                {element.name}
            </div>
        </div>
    )

}