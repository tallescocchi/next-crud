import { useEffect, useState } from "react"

import CollectionClient from "@/backend/db/CollectionClient"

import Client from "@/core/Client"
import ClientRepository from "@/core/ClientRepository"

export default function useClients() {
  
  const [client, setClient] = useState<Client>(Client.empty())
  const [clients, setClients] = useState<Client[]>([])
  const [visible, setVisible] = useState<'table'| 'form'>('table')

  const rep: ClientRepository = new CollectionClient()
  
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

  return {
    client,
    clients,
    visible,
    setVisible,
    clientSelected,
    clientExcluded,
    clientSaved,
    newClient,
    getAll
  }
}