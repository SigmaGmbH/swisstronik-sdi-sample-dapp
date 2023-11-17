import BaseStyles from '../../utils/styles.sets'
import DappHeader from '../base/DapHeader'
import { useState } from 'react'
import RaysPreloader from '../../componets/ui/Preloader/RaysPreloader'
import { Link, useNavigate } from 'react-router-dom'
import MontainsShaped from '../../assets/montains-shaped'

const ConnectService = () => {
  const [loading, setLoading] = useState<boolean>(false)

  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <div>
        {!loading ? (
          <div className='connect__container --login mx-6 rounded-3xl border border-kyc-secondary p-8'>
            <header>
              <DappHeader
                classes='mb-6'
                providerInfo=''
                smallHeading={true}
                headerTitle='SDI Example Service is asking to verify your identity'
              />

              <div className='flex flex-col'>
                <Link
                  className={`${BaseStyles.actionBtnAccent} 
                self-center border border-kyc-primary-dark px-4 py-3 !text-sm uppercase`}
                  to={`/connect-service/result'`}
                >
                  Connect SDI
                </Link>
              </div>
            </header>
          </div>
        ) : (
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
        )}
      </div>
    </div>
  )
}

export default ConnectService
