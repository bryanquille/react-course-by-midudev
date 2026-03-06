import { Button, Card, TextInput, Title } from "@tremor/react"
import { useUserActions } from "../hooks/useUserActions"

function CreateNewUser() {
  const { handleAddUsers } = useUserActions()

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)

    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const github = formData.get('github') as string

    handleAddUsers({ name, email, github })
  }
  return (
    <Card className="mt-8">
      <Title>Crear un nuevo usuario</Title>
      <form
        className="my-4 flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <TextInput
          placeholder="Ingresa el nombre"
          name="name"
        />
        <TextInput
          placeholder="Ingresa el email"
          name="email"
        />
        <TextInput
          placeholder="Ingresa el nombre de usuario de GitHub"
          name="github"
        />
      <div>
        <Button
          type="submit"
          className=""
        >
          Crear Usuario
        </Button>
      </div>
      </form>
    </Card>
  )
}

export default CreateNewUser