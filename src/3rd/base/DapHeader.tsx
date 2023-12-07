import Icons from '../../swisstronik-components/src/components/core/icon-generator'
import BaseStyles from '../../utils/styles.sets'

 
const DappHeader = (
  { providerInfo = '', headerTitle = '', classes = '', description='', smallHeading=false }: 
    { providerInfo: string, headerTitle: string, classes?: string, description?: string, smallHeading?: boolean}
  ) => {
  return ( 
    <header className={classes}>
      <div className='flex justify-center max-w-[66px] mb-2.5 relative m-auto items-center -left-3.5'>
        <Icons className='' name='swtr-logo' color='' size='36px' />
        <Icons className='absolute left-1/2' name='swtr-example-service' size="48" color='' />
      </div>

      <p className={`${BaseStyles.baseDescription} text-center mb-6 !text-sm`}>
        {providerInfo}
      </p>

      <h1 className={`${!smallHeading ? BaseStyles.webMainHeading : BaseStyles.webMainHeadingMobile} text-center mb-2`}>
        {headerTitle} 
      </h1>

      <p className={`${BaseStyles.webBasetext} text-center`}>
        {description}
      </p>

    </header>
   )
}
 
export default DappHeader