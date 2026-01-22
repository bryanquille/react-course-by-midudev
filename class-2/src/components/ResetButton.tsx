type RestButtonProps = {
  resetGame: () => void
  children: string
}

function ResetButton({resetGame, children}: RestButtonProps) {
  return (
    <button 
      type="button"
      className="cursor-pointer w-fit mx-auto p-3 border-2 border-white rounded-2xl hover:opacity-80 hover:border-blue-400"
      onClick={resetGame}
    >
      {children}
    </button>
  )
}

export default ResetButton