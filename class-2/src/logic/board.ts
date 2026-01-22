import { WINNER_COMBOS } from "../constants/constants"

export const checkWinner: (boardToCheck: string[]) => (string | null | boolean) = (boardToCheck) => {
  // Mapping all posible combos to check who wins
  for (const [a, b, c] of WINNER_COMBOS) {
    if(
      boardToCheck[a]
      && boardToCheck[a] === boardToCheck[b]
      && boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a]
    }
  }
  
  // If no winners
  return null
}

export const checkEndGame: (boardToCheck: (string | null)[]) => boolean = (boardToCheck) => {
  return boardToCheck.every(cell => cell !== null)
}