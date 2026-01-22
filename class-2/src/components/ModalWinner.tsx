import ResetButton from "./ResetButton"

type ModalWinnerProps = {
  winner: string | null | boolean
  resetGame: () => void
}

function ModalWinner({winner, resetGame}: ModalWinnerProps) {
  if(winner === null) return
  return (
    <div
      className={`absolute top-1/2 left-1/2 w-10/12 max-w-80 h-80 flex flex-col justify-center items-center gap-6 rounded-4xl bg-gray-900 shadow-sm shadow-white transform -translate-x-1/2 transition-all ease-in-out duration-300 ${ winner !== null ? '-translate-y-1/2 visible' : '-translate-[400%] invisible' }`}
    >
      <h2
        className="font-semibold text-2xl"
      >
        Results
      </h2>
      {
       winner === false 
         ? <span
             className="text-center text-xl"
           >
             It's a tie 🤝
           </span>
         : winner 
             && <div
                  className="flex flex-col gap-4 text-center text-xl"
                >
                  The winner is 
                  <span
                    className="text-4xl"
                  >
                    {winner}
                  </span>
                </div>
      }
      <ResetButton
        resetGame={resetGame}
      >
        Game again
      </ResetButton>
     </div>
  )
}

export default ModalWinner