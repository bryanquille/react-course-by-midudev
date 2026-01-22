import {TURNS} from './constants/constants'
import Square from "./components/Square"
import ModalWinner from "./components/ModalWinner"
import ResetButton from "./components/ResetButton"
import Board from "./components/Board"
import { useGame } from "./hooks/useGame"

function App() {
  const {board, winner, turn, pickTheSquare, resetGame} = useGame()

  return (
    <>
      <main 
        className={`flex flex-col ${ winner !== null ? 'opacity-5 pointer-events-none' : '' }`}
      >
        <h1>Tic Tac Toe</h1>
        <Board 
          board={board}
          pickTheSquare={pickTheSquare}
        />
        <div className="mx-auto mb-4 flex gap-4">
          <Square isSelected={turn === TURNS.X}>
            {TURNS.X}
          </Square>
          <Square isSelected={turn === TURNS.O}>
            {TURNS.O}
          </Square>
        </div>
        <ResetButton
          resetGame={resetGame}
        >
          Reset the game
        </ResetButton>
      </main>
      <ModalWinner 
        winner={winner}
        resetGame={resetGame}
      />
    </>
  )
}

export default App