import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

axios.defaults.timeout = 60000

export function handleAxiosSuccess(response: AxiosResponse, returnOnlyData?: boolean) {
  if (response.status >= 200 && response.status < 300) {
    return !returnOnlyData ? response.data : response.data.result
  } else {
    throw new Error(`Unexpected status code: ${response.status}, errors: ${response.data.errors}`)
  }
}

export function handleAxiosError(error: unknown) {
  if (axios.isAxiosError(error)) {
    return error as AxiosError
  } else {
    console.error('reject request', error)
    return
  }
}

export async function getRequest(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
  return await axios.get(url, config)
}
export async function postRequest<T>(
  url: string,
  params: T,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse> {
  return await axios.post(url, params, config)
}
export async function putRequest<T>(url: string, params: T): Promise<AxiosResponse> {
  return await axios.put(url, params)
}
export async function deleteRequest(url: string): Promise<AxiosResponse> {
  return await axios.delete(url)
}
