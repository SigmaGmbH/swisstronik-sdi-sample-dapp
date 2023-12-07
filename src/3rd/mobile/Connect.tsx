import BaseStyles from '../../utils/styles.sets'
import DappHeader from '../base/DapHeader'
import { useContext, useState } from 'react'
import RaysPreloader from '../../componets/ui/Preloader/RaysPreloader'
import { Link, useNavigate } from 'react-router-dom'
import MontainsShaped from '../../assets/montains-shaped'
import InfoBlock from '../base/InfoBlock.tsx'
import { getSigner } from '../../utils/services.ts'
import MyContext from '../../store/context.tsx'

function renderError(message: string) {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <div className='flex-col items-center justify-center'>
        <InfoBlock warnMessage={message} />
        <div className='fixed bottom-0'>
          <MontainsShaped />
        </div>
      </div>
    </div>
  )
}

function renderLoading() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <div className='flex-col items-center justify-center'>
        <div className='animate-bounce'>
          <RaysPreloader />
        </div>
        <div className={BaseStyles.webMainHeadingMobile}>Loading</div>

        <div className='fixed bottom-0'>
          <MontainsShaped />
        </div>
      </div>
    </div>
  )
}

function renderButton(btn: JSX.Element) {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <div>
        <div className='connect__container --login mx-6 rounded-3xl border border-kyc-secondary p-8'>
          <header>
            <DappHeader
              classes='mb-6'
              providerInfo=''
              smallHeading={true}
              headerTitle='SDI Example Service is asking to verify your identity'
            />

            <div className='flex flex-col'>{btn}</div>
          </header>
        </div>
      </div>
    </div>
  )
}

const ConnectService = () => {
  const [isConnected, setConnected] = useState<null | boolean>(null)
  const { setUserAddress, setSigner } = useContext(MyContext)
  const [loading, setLoading] = useState(false)

  if (!window['ethereum' as any]) {
    return renderError('Metamask not found')
  }
  const connectMetamask = async () => {
    setLoading(true)
    const signerRes = await getSigner()
    console.log(signerRes)
    setLoading(false)
    if (signerRes === null) {
      setConnected(false)
    } else {
      const [userAddress, signer] = signerRes

      if (signer) {
        setSigner(signer)
        setUserAddress(userAddress)
        setConnected(true)
      } else {
        setConnected(false)
      }
    }
    console.log(`Connected - ${isConnected}, loading - ${loading}`)
  }
  if (loading) {
    return renderLoading()
  }

  if (isConnected !== null) {
    if (isConnected) {
      return renderButton(
        <button
          className={`${BaseStyles.actionBtnAccent} 
                self-center border border-kyc-primary-dark px-4 py-3 !text-sm uppercase`}
        >
          Issue DID
        </button>,
      )
    } else {
      return renderError('Connection error')
    }
  }

  return renderButton(
    <button
      className={`${BaseStyles.actionBtnAccent} 
                self-center border border-kyc-primary-dark px-4 py-3 !text-sm uppercase`}
      onClick={connectMetamask}
    >
      Connect Metamask to use SDI
    </button>,
  )
}

export default ConnectService
