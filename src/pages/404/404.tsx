import Icon from '../../swisstronik-components/src/components/core/icon-generator'
import NotFoundImage from './NotFoundImage'


const NotFoundPage = () => {
  return (
    <div className='not-found-page flex flex-col items-center py-32' id='notFoundPage'>
      <div>
        <div>
          <h1 className='mb-12 text-center font-bold uppercase text-white sm:text-[32px] sm:leading-snug lg:text-5xl/[67.2px]'>
            Page not found <br />
            <span className='text-center font-medium text-primary sm:text-xl lg:text-4xl'>
              Error 404
            </span>
          </h1>
        </div>

        <div className='animation_404__block not-found-image mb-12'>
          <NotFoundImage />
        </div>

        <a href='/' className='flex justify-center text-white'>
          <div className='mr-2 text-right'>
            Go to <br /> Main page
          </div>
          <Icon color="kyc-primary-dark" name='arrowAlt' />
        </a>
      </div>
    </div>
  )
}

export default NotFoundPage
