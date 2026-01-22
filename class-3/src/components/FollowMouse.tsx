import { useMouseFollow } from "../hooks/useMouseFollow"

function FollowMouse() {
  const {enabled, position, handleClick} = useMouseFollow()
  return (
    <>
      <button 
        type="button"
        className="cursor-pointer block mx-auto px-4 py-2 border-2 border-neutral-300 rounded-2xl font-semibold transition-all ease-in duration-200 hover:bg-neutral-300 hover:text-neutral-900"
        onClick={handleClick}
      >
        {enabled ? 'Desactivate' : 'Activate' } mouse follow
      </button>
      <div
        className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-amber-300 opacity-50 pointer-events-none"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
      ></div>
    </>
  )
}

export default FollowMouse