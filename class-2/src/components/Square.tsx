type SquareProps = {
  index?: number
  updateBoard?: (index: number) => void
  isSelected?: boolean
  children?: string
}

function Square({index, updateBoard, isSelected, children}: SquareProps) {

  const handleClick = () => {
    if(typeof index === 'number' && updateBoard) updateBoard(index)
  }

  return (
    <button
      type="button"
      className={`cursor-pointer w-24 h-24 grid place-items-center border-2 rounded-lg ${isSelected ? 'bg-emerald-400' : ''}`}
      onClick={handleClick}
    >
      <span
        className="text-4xl"
      >
        {children}
      </span>
    </button>
  )
}

export default Square