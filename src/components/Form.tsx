import { useState } from "react";
import Client from "@/core/Client";
import Input from "./Input";
import Button from "./Button";

interface FormProps {
  client: Client
  clientChange?: (client: Client) => void
  canceled?: () => void
}

export default function Form({client, clientChange, canceled}: FormProps) {
  const id = client?.id
  const[name, setName] = useState(client?.name || '')
  const[age, setAge] = useState(client?.age || '')

  return (
    <div className="bg-violet-100 rounded-md p-3">
      {id ? (
        <Input text='Código' value={id} reading />
      ) : false}
      <Input text='Nome' value={name} valueChange={setName} />
      <Input text='Idade' type='number' value={age} valueChange={setAge} />
      <div className="flex justify-end mt-4">
        <Button 
          color='blue' 
          className="mr-2" 
          onClick={() => clientChange?.(new Client(name, +age, id))}>
          {id ? 'Editar' : 'Salvar'}
        </Button>
        <Button onClick={canceled} color="gray">
          Cancelar
        </Button>
      </div>
    </div>
  )
}