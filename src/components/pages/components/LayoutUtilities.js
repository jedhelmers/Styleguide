import React from 'react';
import { Heading } from '../../atoms/Heading'
import { Icon } from '../../atoms/Icon'
import { ToolTip } from '../../atoms/Tooltip'
import { Header } from '../components/Header'
import { Markup } from '../../../utils/helpers'
import Prism from "prismjs"

export default function ContentLayout() {
  return (
    <React.Fragment>
    <Header title='Content Layout' classNames={[]}/>
    <div className='p20'>
      <Heading type='h1' classNames={['underline thick']}>Layout Utilities</Heading>

      <div className='tooltiptext' onClick={() => <ToolTip >close2</ToolTip>}>
        <div className={['tooltip']} onClick={''}>
          <ToolTip ><label className={['tooltiptext White']}>.close2</label></ToolTip>
          <Icon icon={'close2'} classNames={['p10', 'Secondary']} styles={{ width: 20 }} size='sl'/>
        </div>
      </div>

    </div>
    </React.Fragment>
  )
}
