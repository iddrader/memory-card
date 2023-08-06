import '../styles/Header.css';

export default function Header(props) {
    const {score, bestScore} = props;
    return(
        <header>
            <div className="score">Best: {bestScore}</div>
            <h2>Elements</h2>
            <div className="score">Score: {score}</div>
        </header>
    )
}