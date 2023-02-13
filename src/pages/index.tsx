import { useEffect, useState } from "react";

import Client from "@/core/Client";
import ClientRepository from "@/core/ClientRepository";

import CollectionClient from "@/backend/db/CollectionClient";

import Layout from "@/components/Layout";
import Table from "@/components/Table";
import Button from "@/components/Button";
import Form from "@/components/Form";

export default function Home() {

  const rep: ClientRepository = new CollectionClient()
  
  const [client, setClient] = useState<Client>(Client.empty())
  const [clients, setClients] = useState<Client[]>([])
  const [visible, setVisible] = useState<'table'| 'form'>('table')

  useEffect(getAll, [])
  
  function getAll(){
    rep.getAll()
      .then(clients => {
        setClients(clients)
        setVisible('table')
      })
  }

  function clientSelected(client: Client) {
    setClient(client)
    setVisible('form')
  }

  async function clientExcluded(client: Client) {
    await rep.delete(client)
    getAll()
  }

  async function clientSaved(client: Client) {
    await rep.save(client)
    getAll()
  }

  function newClient() {
    setClient(Client.empty())
    setVisible('form')
  }

  return (
    <div className="
      flex h-screen justify-center items-center
      bg-gradient-to-r from-violet-800 to-violet-500
      text-zinc-100
    ">
      <Layout title="Cadastro Simples">
        {visible === 'table' ? (
          <>
            <div className="flex justify-end">
              <Button 
                className="mb-4"
                onClick={() => newClient()}
              >
                Novo Cliente
              </Button>
            </div>
            <Table clients={clients} clientSelected={clientSelected} clientExcluded={clientExcluded} />
          </>
        ) : (
          <Form 
            client={client} 
            clientChange={clientSaved}
            canceled={() => setVisible('table')}
          />
        )}
      </Layout>
    </div>
  )
}
