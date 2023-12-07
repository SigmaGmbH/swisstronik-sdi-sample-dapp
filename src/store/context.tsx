import { createContext } from 'react'
import { providers } from 'ethers'
import { IDidApiModel } from '../utils/issuer.api.ts'

//TODO: Add types for DID
interface MyContextType {
  userAddress: string | null
  setUserAddress: (addr: string | null) => void
  did: IDidApiModel | null
  setDid: (data: IDidApiModel) => void
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
