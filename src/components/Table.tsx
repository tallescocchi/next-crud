import Client from '@/core/Client'
import { IconEdit, IconTrash } from '@/components/icons'

interface TableProps {
  clients: Client[]
  clientSelected?: (client: Client) => void
  clientExcluded?: (client: Client) => void
}

export default function Table({clients, clientSelected, clientExcluded}: TableProps) {

  const viewActions = clientSelected || clientExcluded

  function renderHeader() {
    return (
      <tr>
        <th className="text-left p-3">Código</th>
        <th className="text-left p-3">Nome</th>
        <th className="text-left p-3">Idade</th>
        {viewActions ? <th className="p-3">Ações</th> : false}
      </tr>
    )
  }

  function renderData() {
    return clients?.map((client, i) => {
      return (
        <tr key={client.id} className={`${i % 2 === 0 ? 'bg-violet-200' : 'bg-violet-100'}`}>
          <td className="font-medium text-left p-3">{client.id}</td>
          <td className="font-medium text-left p-3">{client.name}</td>
          <td className="font-medium text-left p-3">{client.age}</td>
          {viewActions ? renderActions(client) : false}
        </tr>
      )
    })
  }

  function renderActions(client: Client) {
    return (
      <td className='flex justify-center items-center'>
        {clientSelected ? (
          <button onClick={() => clientSelected?.(client)} className='
          flex justify-center items-center text-green-600
          rounded-full p-2 hover:bg-violet-300 m-1
          '>
          {IconEdit}
        </button>
        ) : false}

        {clientExcluded ? (
          <button onClick={() => clientExcluded?.(client)} className='
          flex justify-center items-center text-red-500
          rounded-full p-2 hover:bg-violet-300 m-1
        '>
          {IconTrash}
        </button>
        ) : false}
      </td>
    )
  }

  return (
    <table className="w-full rounded-xl overflow-hidden"> 
      <thead className="bg-gradient-to-r from-violet-400 to-violet-600 text-zinc-100">
        {renderHeader()}  
      </thead>
      <tbody>
        {renderData()}
      </tbody>
    </table>
  )
}