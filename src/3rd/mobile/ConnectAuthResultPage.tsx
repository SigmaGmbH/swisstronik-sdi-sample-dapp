import { useContext, useEffect, useState } from 'react'
import MyContext from '../../store/context'
import MontainsShaped from '../../assets/montains-shaped'
interface IAuthResult {
  count: number
  isVerified: boolean
}

import {
  requestVerifiedUsersCount,
  requestIfUserIsVerified,
  DEMO_CONTRACT_ADDRESS,
  DEMO_RPC_ENDPOINT,
  authorizeVerifiableCredential,
} from '../../utils/services'
import { providers } from 'ethers'
import Icons from '../../swisstronik-components/src/components/core/icon-generator'
import { useNavigate } from 'react-router-dom'
import { RaysPreloader } from '../../components'
import BaseStyles from '../../utils/styles.sets'
import { IDidApiModel } from '../../utils/issuer.api.ts'

const ConnectAuthResultPage = () => {
  const navigate = useNavigate()
  const { userAddress, signer, did } = useContext(MyContext)

  const [verificationResult, setVerificationResult] = useState<IAuthResult>({
    count: 0,
    isVerified: false,
  })

  const [loading, setLoading] = useState<boolean>(false)

  const fetchAuthState = async (address: string) => {
    try {
      setLoading(true)
      const provider = new providers.JsonRpcProvider(DEMO_RPC_ENDPOINT)
      const counter = await requestVerifiedUsersCount(provider, DEMO_CONTRACT_ADDRESS)
      const isVerified = await requestIfUserIsVerified(provider, DEMO_CONTRACT_ADDRESS, address)
      setVerificationResult({ count: counter, isVerified: isVerified })
      setLoading(false)
    } catch (e) {
      setLoading(false)
      console.error('Cannot obtain data. Reason: ', e)
    }
  }

  useEffect(() => {
    if (userAddress) {
      fetchAuthState(userAddress)
    } else {
      if (userAddress === null || signer === null || did === null) {
        console.log(
          `Navigating to root because - userAddress is null: ${
            userAddress === null
          }, signer is null: ${signer === null}, did is null: ${did === null}`,
        )
        navigate('/')
      }
    }
  }, [])

  const authorizeDID = async () => {
    setLoading(true)
    const provider = new providers.JsonRpcProvider(DEMO_RPC_ENDPOINT)
    const res = await authorizeVerifiableCredential(
      provider,
      signer as providers.JsonRpcSigner,
      DEMO_CONTRACT_ADDRESS,
      did as IDidApiModel,
    )
    console.log(res)
    setLoading(false)
    await fetchAuthState(userAddress as string)
  }

  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      {!loading ? (
        <>
          <div className='w-full'>
            <header className='mb-6 flex flex-col items-center'>
              <div className='mb-2 flex h-11 w-11 items-center justify-center rounded-full border-2 border-kyc-primary-dark'>
                {verificationResult && verificationResult.isVerified ? (
                  <Icons name='checkmark' color='' size='24' />
                ) : (
                  <>
                    <Icons name='cross' color='' size='24' />
                  </>
                )}
              </div>

              <div>
                {verificationResult && verificationResult.isVerified
                  ? 'Verification passed'
                  : 'Not verified'}
              </div>
              {!verificationResult ||
                (!verificationResult.isVerified && (
                  <button
                    className={`${BaseStyles.actionBtnAccent} 
                  mt-4 self-center border border-kyc-primary-dark px-4 py-3 !text-sm uppercase`}
                    onClick={authorizeDID}
                  >
                    Verify DID
                  </button>
                ))}
            </header>

            <ResultTable userAddress={userAddress} authResult={verificationResult} />
          </div>
        </>
      ) : (
        <>
          <div className='animate-bounce'>
            <RaysPreloader />
          </div>
          <div className={BaseStyles.webMainHeadingMobile}>Loading</div>
        </>
      )}

      <div className='fixed bottom-0'>
        <MontainsShaped />
      </div>
    </div>
  )
}

export default ConnectAuthResultPage

const ResultTable = ({
  userAddress,
  authResult,
}: {
  userAddress: string | null
  authResult: IAuthResult
}) => {
  return (
    <div className='connect__container --login mx-6 rounded-3xl border border-kyc-secondary p-12'>
      <div className='mb-4 flex flex-wrap items-center justify-between border-b border-kyc-secondary pb-2.5'>
        <div className='w-[50%]'>Address</div>
        <div className='max-w-[100px] truncate'>{userAddress}</div>
      </div>

      <div className='mb-4 flex flex-wrap items-center justify-between border-b border-kyc-secondary pb-2.5'>
        <div className='w-[80%]'>Verified users count </div>
        <div className=''>{authResult.count}</div>
      </div>

      <div className='mb-4 flex flex-wrap items-center justify-between border-b border-kyc-secondary pb-2.5'>
        <div className='w-[80%]'>Is verified</div>
        <div className=''>{authResult.isVerified ? 'True' : 'False'}</div>
      </div>
    </div>
  )
}
