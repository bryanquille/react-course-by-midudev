type ActionButtonPropsTypes = {
  children: React.ReactNode
  onClick: () => void
  disabled?: boolean
}

function ActionButton({ children, onClick, disabled }: ActionButtonPropsTypes) {
  return (
    <button
      type="button"
      className="cursor-pointer p-2 rounded-full hover:bg-[#e5e5e5]"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default ActionButton