import { Badge, Button, Card, TextInput, Title } from "@tremor/react"
import { useUserActions } from "../hooks/useUserActions"
import { useState } from "react"

function CreateNewUser() {
  const { handleAddUsers } = useUserActions()
  const [result, setResult] = useState<'ok' | 'ko' | null>(null)

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)

    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const github = formData.get('github') as string

    if(!name || !email || !github) {
      return setResult('ko')
    }

    handleAddUsers({ name, email, github })
    setResult('ok')
    form.reset()
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
      <div className="flex items-center gap-4">
        <Button
          type="submit"
          className=""
        >
          Crear Usuario
        </Button>
        <span>
          {result === 'ok' && <Badge color='green'>Guardado correctamente</Badge>}
          {result === 'ko' && <Badge color='red'>Error en los campos de registro</Badge>}
        </span>
      </div>
      </form>
    </Card>
  )
}

export default CreateNewUser