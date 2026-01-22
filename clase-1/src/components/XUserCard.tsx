import { useState } from "react"

type XUserCardProps = {
  username: string
  name: string
  initialIsFollowing: boolean
  formateUsername: (username: string) => string
}

function XUserCard({ username, name, initialIsFollowing, formateUsername }: XUserCardProps) {
  const [isFollowing, setIsFollowing] = useState<boolean>(initialIsFollowing)

  const handleClick: () => void = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <div 
      className="flex justify-between items-center gap-2 px-2 py-3 rounded"
    >
      <img 
        src={`https://unavatar.io/x/${username}`}
        alt={`Avatar de ${username}`}
        className="w-12 rounded-full"
      />
      <div
        className="mr-2 flex flex-col leading-tight"
      >
        <strong>{name}</strong>
        <span
          className="text-gray-400 text-sm"
        >
          {formateUsername(username)}
        </span>
      </div>
      <div className="w-29 ml-auto flex justify-end">
        <button 
          type="button"
          className={
            `cursor-pointer ml-auto bg-gray-100 text-xs font-medium px-4 py-1.5 rounded-full text-black hover:bg-gray-300 transition-all duration-400 ${isFollowing ? 'isFollowing' : ''}`
          }
          onClick={handleClick}
        >
          <span className="first-btn-text">
            {isFollowing ? 'Siguiendo' : 'Seguir'}
          </span>
          <span className="hover-btn-text">Dejar de seguir</span>
        </button>
      </div>
    </div>
  )
}

export default XUserCard