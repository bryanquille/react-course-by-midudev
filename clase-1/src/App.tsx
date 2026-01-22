import XUserCard from "./components/XUserCard"
import { formateUsername } from "./helpers/formateUsername"

type User = {
  id: number
  username: string
  name: string
  initialIsFollowing: boolean
}

function App() {
  const users: User[] = [
    { 
      id: 1, 
      username: 'midudev', 
      name: 'Miguel Angel Duran', 
      initialIsFollowing: true 
    },
    { 
      id: 2, 
      username: 'pedroelcampeon', 
      name: 'Pedro El Campeon', 
      initialIsFollowing: false 
    },
    { 
      id: 3, 
      username: 'arielmelo', 
      name: 'Ariel Melo', 
      initialIsFollowing: false 
    },
    { 
      id: 4, 
      username: 'lauragomezm', 
      name: 'Laura Gomezm', 
      initialIsFollowing: true },
    { 
      id: 5,
      username: 'manueldelgado', 
      name: 'Manuel Delgado', 
      initialIsFollowing: false 
    },
  ]

  return (
    <div className="max-w-md p-3 border border-gray-300 rounded-2xl overflow-hidden">
      {
        users.map(({ id, username, name, initialIsFollowing }) => (
            <XUserCard 
              key={id}
              username={username}
              name={name}
              initialIsFollowing={initialIsFollowing}
              formateUsername={() => formateUsername(username)}
            />
          )
        )
      }
    </div>
  )
}

export default App