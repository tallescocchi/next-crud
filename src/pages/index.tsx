import Client from "@/core/Client";

import Layout from "@/components/Layout";
import Table from "@/components/Table";

export default function Home() {
  const clients = [
    new Client('Ana', 34, '1'),
    new Client('Bia', 44, '2'),
    new Client('Rosalva', 54, '3'),
    new Client('Kelly', 24, '4'),
  ]

  function clientSelected(client: Client) {
    console.log(client.name);
  }

  function clientExcluded(client: Client) {
    console.log(client.name);
  }

  return (
    <div className="
      flex h-screen justify-center items-center
      bg-gradient-to-r from-violet-800 to-violet-500
      text-zinc-100
    ">
      <Layout title="Cadastro Simples">
        <Table clients={clients} clientSelected={clientSelected} clientExcluded={clientExcluded}></Table>
      </Layout>
    </div>
  )
}
