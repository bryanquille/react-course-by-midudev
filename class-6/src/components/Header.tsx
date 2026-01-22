type HeaderProps = {
  elementRef: React.RefObject<HTMLElement | null>
}

function Header({elementRef}: HeaderProps) {
  const handleClick = () => {
    console.log('Cart button working')
  }
  return (
    <header
      className="fixed top-3 left-1/2 w-11/12 max-w-3xl py-3 rounded-xl bg-slate-800/60 backdrop-blur-xs shadow shadow-neutral-400 transform -translate-x-1/2"
      ref={elementRef}
    >
      <h1>Cart App</h1>
      <button
        type="button"
        className="absolute top-1/2 right-4 cursor-pointer transform -translate-y-1/2"
        onClick={handleClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30px"
          viewBox="0 -960 960 960"
          width="30px"
          fill="#f5f5f5"
          className="hover:fill-gray-400"
        >
          <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
        </svg>
        <span
          className="absolute top-0 ring-0 w-5 h-5 rounded-full text-sm font-semibold bg-purple-500 text-neutral-100 transform -translate-y-1/2"
        >
          5{/* TODO: Update this status with a state */}
        </span>
      </button>
    </header>
  )
}

export default Header