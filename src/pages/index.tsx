import useClients from "@/hooks/useClients";

import Layout from "@/components/Layout";
import Table from "@/components/Table";
import Button from "@/components/Button";
import Form from "@/components/Form";

export default function Home() {

  const {
    client, 
    clients, 
    visible, 
    setVisible, 
    clientSelected, 
    clientExcluded, 
    clientSaved, 
    newClient} = useClients()

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
