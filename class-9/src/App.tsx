import { Toaster } from "sonner"
import CreateNewUser from "./components/CreateNewUser"
import ListOfUsers from "./components/ListOfUsers"

function App() {
  return (
    <>
      <h1 className="my-6 font-semibold text-3xl text-center">Nuestro Proyecto con Redux</h1>
      <ListOfUsers />
      <CreateNewUser />
      <Toaster richColors />
    </>
  )
}

export default App