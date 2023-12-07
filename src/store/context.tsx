import { createContext } from 'react'
import { providers } from 'ethers'

//TODO: Add types for DID
interface MyContextType {
  userAddress: string | null
  setUserAddress: (addr: string | null) => void
  did: { [key: string]: any } | null
  setDid: (data: object) => void
  signer: providers.JsonRpcSigner | null
  setSigner: (signer: providers.JsonRpcSigner) => void
}

const MyContext = createContext<MyContextType>({
  userAddress: null,
  setUserAddress: () => undefined,
  did: null,
  setDid: () => undefined,
  signer: null,
  setSigner: () => undefined,
})

export default MyContext
