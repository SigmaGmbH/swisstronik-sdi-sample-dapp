import React, { useState } from 'react'
import MyContext from './context'
import { providers } from 'ethers'

const MyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [did, setDid] = useState<object | null>(null)
  const [userAddress, setUserAddress] = useState<string | null>(null)
  const [signer, setSigner] = useState<providers.JsonRpcSigner | null>(null)

  const provideObject = {
    did,
    setDid,
    userAddress,
    setUserAddress,
    signer,
    setSigner,
  }

  return <MyContext.Provider value={provideObject}>{children}</MyContext.Provider>
}

export default MyProvider
