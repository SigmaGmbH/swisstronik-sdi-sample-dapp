import { ethers, providers, Wallet } from 'ethers'
import { encryptDataField, decryptNodeResponse } from '@swisstronik/utils/src/tx'

export const getBase64 = (file: Blob) => {
  return new Promise((resolve) => {
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      resolve(reader.result)
    }
  })
}

export const getSigner = async () => {
  const { ethereum } = window as any
  const provider = new ethers.providers.Web3Provider(ethereum)

  try {
    const res = await provider.send('eth_requestAccounts', [])
    // There is no connected accounts
    if (res.length == 0) {
      return null
    }
    return [res[0], provider.getSigner()]
  } catch {
    // If user declines connect, we return null signer
    return null
  }
}

const sendShieldedQuery = async (
  provider: providers.JsonRpcProvider,
  destination: string,
  data: string,
) => {
  // Encrypt call data
  const [encryptedData, usedEncryptedKey] = await encryptDataField(provider.connection.url, data)

  // Do call
  const response = await provider.call({
    to: destination,
    data: encryptedData,
  })

  // Decrypt call result
  return await decryptNodeResponse(provider.connection.url, response, usedEncryptedKey)
}
