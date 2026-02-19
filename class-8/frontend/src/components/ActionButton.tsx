type ActionButtonPropsTypes = {
  children: React.ReactNode
  onClick: () => void
}

function ActionButton({ children, onClick }: ActionButtonPropsTypes) {
  return (
    <button
      type="button"
      className="cursor-pointer p-2 rounded-full hover:bg-[#e5e5e5]"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default ActionButton