import { ethers, providers, Wallet } from 'ethers'
import { encryptDataField, decryptNodeResponse } from '@swisstronik/utils/src/tx'
import { abi } from '../contract/abi'

export const DEMO_CONTRACT_ADDRESS = '0x2932Bd8a5e4b96E482344ceff065aFA34338aB97'
export const DEMO_RPC_ENDPOINT = 'https://json-rpc.testnet.swisstronik.com'

export const getBase64 = (file: Blob) => {
  return new Promise((resolve) => {
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      resolve(reader.result)
    }
  })
}

export const getSigner: () => Promise<null | [string, providers.JsonRpcSigner]> = async () => {
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

/**
 * Sends shielded query to smart contract to obtain amount of unique verified users
 * @param provider JSON-RPC provider to obtain data
 * @param destination Smart contract address
 * @returns Amount of unique verified users
 */
export const requestVerifiedUsersCount = async (
  provider: providers.JsonRpcProvider,
  destination: string,
): Promise<number> => {
  const contract = new ethers.Contract(destination, abi)
  const queryData = contract.interface.encodeFunctionData('authorizedUsers', [])
  const res = await sendShieldedQuery(provider, destination, queryData)
  return contract.interface.decodeFunctionResult('authorizedUsers', res)[0].toNumber()
}

/**
 * Sends shielded query to smart contract to check if user was verified or not
 * @param provider JSON-RPC provider to obtain data
 * @param destination Smart contract address
 * @param userAddress User address to check
 * @returns True if user was verified
 */
export const requestIfUserIsVerified = async (
  provider: providers.JsonRpcProvider,
  destination: string,
  userAddress: string,
): Promise<boolean> => {
  const contract = new ethers.Contract(destination, abi)
  const queryData = contract.interface.encodeFunctionData('isAuthorized', [userAddress])
  const res = await sendShieldedQuery(provider, destination, queryData)
  return contract.interface.decodeFunctionResult('isAuthorized', res)[0] as boolean
}
