import HambMenu from './HambMenu'
import MainTitle from './MainTitle'
import UserMenu from './UserMenu'

function Header() {
  return (
    <header className="mb-10 py-3 px-4 flex justify-between border-b-2 border-b-[#d5d5d5]">
      <div className="flex flex-row-reverse items-center gap-2">
        <MainTitle />
        <HambMenu />
      </div>
      <UserMenu />
    </header>
  )
}

export default Header