import Icons from '../../swisstronik-components/src/components/core/icon-generator';
import BaseStyles from '../../utils/styles.sets';

function InfoBlock({ warnMessage = '' } : { warnMessage: string}) {
  return ( 
    <aside className={`${BaseStyles.actionItemBordered} info_block p-4`}>
        <Icons name='attentionMark' color='' size='20' className='mr-9' />
        <span>{warnMessage}</span>
    </aside>
   )
}

export default InfoBlock;