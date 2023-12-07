import { AxiosError, AxiosRequestConfig } from 'axios'
import { getRequest, handleAxiosError, handleAxiosSuccess, postRequest } from './api.ts'

const issuerApi = 'https://issuer.sdi.swisstronik.com'

export interface DIDCreateParams {
  user_address: string
}
export interface IDidApiModel {
  credentialSubject: {
    kycPassed: boolean
    user_address: string
    id: string
  }
  issuer: {
    id: string
  }
  type: string[]
  '@context': string[]
  issuanceDate: string
  proof: {
    type: string
    jwt: string
  }
}

export const createDid = async (
  requestData: DIDCreateParams,
  config: AxiosRequestConfig,
): Promise<IDidApiModel | AxiosError | undefined> => {
  const url = `${issuerApi}/api/did/create`
  try {
    const response = await postRequest<DIDCreateParams>(url, requestData, config)
    return handleAxiosSuccess(response, true)
  } catch (error) {
    return handleAxiosError(error)
  }
}
