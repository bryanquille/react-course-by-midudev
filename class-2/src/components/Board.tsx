import Square from "./Square"

type BoardProps = {
  board: string[] | null[]
  pickTheSquare: (index: number) => void
}

function Board({board, pickTheSquare}: BoardProps) {
  return (
    <div
      className="mb-8 grid grid-cols-3 gap-2"
    >
      {
        board.map((val, index) => {
          return(
            <Square 
              key={index}
              index={index}
              updateBoard={pickTheSquare}
            >
              {val ? val : ''}
            </Square>
          )
        })
      }
    </div>
  )
}

export default Board