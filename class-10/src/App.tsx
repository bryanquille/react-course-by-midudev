import { useEffect, useState } from "react"
import type { UserType } from "./types"

function App() {
  const [users, setUsers] = useState<UserType[]>([])
  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=100')
        const data = await response.json()
        setUsers(data.results)
      } catch (error) {
        console.log(error)
      }
    }

    getUsers()
  }, [])

  return (
    <div>
      <h1>Prueba Técnica</h1>
      {
        JSON.stringify(users)
      }
    </div>
  )
}

export default App