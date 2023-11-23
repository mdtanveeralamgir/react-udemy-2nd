export default function GameOver({winner, handleResetGame}){
    return <div id="game-over">
        <h2>Game Over!</h2>
        {winner && <p>{winner} Won!</p>}
        {!winner && <p>Draw</p>}
        <p><button onClick={handleResetGame}>Rematch!</button></p>
    </div>
}