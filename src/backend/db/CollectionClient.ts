import { dataBase } from '../config'
import firestore, {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from 'firebase/firestore'
import Client from '../../core/Client'
import ClientRepository from '../../core/ClientRepository'
 
export default class CollectionClient implements ClientRepository {
 
  #converter = {
    toFirestore: (client: Client) => {
      return {
        name: client.name,
        age: client.age,
      }
    },
    fromFirestore: (
      snapshot: firestore.QueryDocumentSnapshot,
      options: firestore.SnapshotOptions,
      ) => {
        const provide = snapshot.data(options)
        return new Client(provide.name, provide.age, snapshot.id)
      },
    }
    
  #collectionClient = collection(dataBase, 'clients').withConverter(this.#converter)
 
  async save(client: Client): Promise<Client> {
    if (client?.id) {
      await setDoc(
        doc(dataBase, 'clients', client.id).withConverter(this.#converter),
        client,
      )
      return client
    } else {
      const docRef = await addDoc(
        this.#collectionClient,
        client,
      )
      const doc = await getDoc(docRef)
      
      return doc.data()
    }
  }
 
  async delete(client: Client): Promise<void> {
    return await deleteDoc(doc(dataBase, 'clients', client.id))
  }
 
  async getAll(): Promise<Client[]> {
    const clientsCol = this.#collectionClient
    const clientsSnapshot = await getDocs(clientsCol)
    const clientsList = clientsSnapshot.docs.map((doc) => doc.data()) ?? []
    return clientsList
  }
}