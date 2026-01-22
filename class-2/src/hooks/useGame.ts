import { useState } from "react"
import { initialBoard, TURNS } from "../constants/constants"
import { checkEndGame, checkWinner } from "../logic/board"
import confetti from "canvas-confetti"

export const useGame = () => {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : initialBoard
  })
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ? turnFromStorage : TURNS.X
  })
  // null: no winner, false: tie
  const [winner, setWinner] = useState<string | null | boolean>(null)

  const pickTheSquare = (index: number) => {
    // Blocking the filled cells and if there's a winner
    if(board[index] || winner) return
  
    // Showing the turn in the cell
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    window.localStorage.setItem('board', JSON.stringify(newBoard))

    // Change the turn after click a cell
    if(turn === TURNS.X) {
      setTurn(TURNS.O)
      window.localStorage.setItem('turn', TURNS.O)
    }
    else {
      setTurn(TURNS.X)
      window.localStorage.setItem('turn', TURNS.X)
    }

    // Check if someone wins
    const newWinner = checkWinner(newBoard)
    if(newWinner) {
      confetti()
      setWinner(newWinner)
    }
    else if(checkEndGame(newBoard)) setWinner(false)
  }

  const resetGame = () => {
    setBoard(initialBoard)
    setTurn(TURNS.X)
    setWinner(null)
    window.localStorage.setItem('board', JSON.stringify(initialBoard))
    window.localStorage.setItem('turn', TURNS.X)
  }

  return {
    board,
    turn,
    winner,
    pickTheSquare,
    resetGame,
  }
}
