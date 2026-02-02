import defaultUser from '../../assets/default/default_user.png'

function UserMenu() {
  return (
    <div
      className={`
          cursor-pointer 
          overflow-hidden 
          border-[3px] 
          border-t-[#ea4335] 
          border-r-[#4285f4]
          border-b-[#34a853]
          border-l-[#fbbc05]
          rounded-full
        `}
    >
      <img
        src={defaultUser}
        alt="User image"
        className='w-9 h-9 p-0.5'
      />
    </div>
  )
}

export default UserMenu