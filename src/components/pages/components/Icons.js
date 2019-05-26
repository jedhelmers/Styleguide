import React from 'react'
import { Heading } from '../../atoms/Heading'
import { Icon } from '../../atoms/Icon'
import { ToolTip } from '../../atoms/Tooltip'
import { Header } from '../components/Header'
import { Markup, dbToCamelCase, camelCaseToDb, grabKeyFromObject, arryToObject } from '../../../utils/helpers'
import { testResults } from '../../../utils/colordata'
import Prism from "prismjs"
import '../../../utils/markup.css'

const headingList = [
  {
    type: 'pencil',
    classNames: ['Secondary', 'bold', 'uppercase'],
    size: 'xxlg'
  },
  {
    type: 'undelete',
    classNames: ['clickable', 'Winblue'],
    size: 'xlg'
  },
  {
    type: 'trash-unavailable',
    classNames: ['Alert'],
    size: 'lg'
  },
  {
    type: 'scan-gun',
    classNames: ['Warning'],
    size: 'md'
  },
  {
    type: 'commodity-pricing1',
    classNames: [],
    size: 'sl'
  },
  {
    type: 'soe',
    classNames: [],
    size: 'xsl'
  },
  {
    type: 'receiving',
    classNames: [],
    size: 'xxsl'
  },
  {
    type: 'purchasing',
    classNames: [],
    size: 32
  },
  {
    type: 'linecard',
    classNames: [],
    size: 24
  },
  {
    type: 'call-queues',
    classNames: [],
    size: 16
  },
  {
    type: 'pencil',
    classNames: [],
    size: 13
  },
]

let iconList = [
  {name: 'instagram'},
  {name: 'brand'},
  {name: 'social'},
  {name: 'linecard'},
  {name: 'scan-gun'},
  {name: 'purchasing'},
  {name: 'transfer'},
  {name: 'move'},
  {name: 'picking'},
  {name: 'receiving'},
  {name: 'catalog'},
  {name: 'yed'},
  {name: 'commodity-pricing'},
  {name: 'inquiry'},
  {name: 'ratings'},
  {name: 'service-partners'},
  {name: 'supplier'},
  {name: 'suppliers'},
  {name: 'tracking'},
  {name: 'soe'},
  {name: 'call-queues'},
  {name: 'ion-archive'},
  {name: 'ion-chevron-left'},
  {name: 'ion-chevron-right'},
  {name: 'ion-close-circled'},
  {name: 'ion-ios-close'},
  {name: 'ion-ios-search-strong'},
  {name: 'ion-ios-search'},
  {name: 'reorder-handle'},
  {name: 'trash-unavailable'},
  {name: 'undelete'},
  {name: 'add-tax-certificate'},
  {name: 'commodity-pricing1'},
  {name: 'th-list1'},
  {name: 'comment'},
  {name: 'folder'},
  {name: 'folder-open'},
  {name: 'angle-double-left'},
  {name: 'database'},
  {name: 'question-circle-o'},
  {name: 'plus'},
  {name: 'minus'},
  {name: 'search'},
  {name: 'star'},
  {name: 'star-o'},
  {name: 'user'},
  {name: 'th-large'},
  {name: 'th-list'},
  {name: 'check'},
  {name: 'close'},
  {name: 'remove'},
  {name: 'times'},
  {name: 'cog'},
  {name: 'gear'},
  {name: 'file-o'},
  {name: 'clock-o'},
  {name: 'download'},
  {name: 'inbox'},
  {name: 'refresh'},
  {name: 'lock'},
  {name: 'tag'},
  {name: 'bookmark'},
  {name: 'print'},
  {name: 'camera'},
  {name: 'text-height'},
  {name: 'image'},
  {name: 'photo'},
  {name: 'picture-o'},
  {name: 'pencil'},
  {name: 'map-marker'},
  {name: 'adjust'},
  {name: 'edit'},
  {name: 'pencil-square-o'},
  {name: 'arrows'},
  {name: 'step-backward'},
  {name: 'backward'},
  {name: 'forward'},
  {name: 'step-forward'},
  {name: 'chevron-left'},
  {name: 'chevron-right'},
  {name: 'plus-circle'},
  {name: 'minus-circle'},
  {name: 'times-circle'},
  {name: 'check-circle'},
  {name: 'question-circle'},
  {name: 'info-circle'},
  {name: 'times-circle-o'},
  {name: 'check-circle-o'},
  {name: 'arrow-right'},
  {name: 'exclamation-circle'},
  {name: 'eye'},
  {name: 'exclamation-triangle'},
  {name: 'warning'},
  {name: 'calendar'},
  {name: 'chevron-up'},
  {name: 'chevron-down'},
  {name: 'shopping-cart'},
  {name: 'key'},
  {name: 'cogs'},
  {name: 'gears'},
  {name: 'sign-out'},
  {name: 'upload'},
  {name: 'phone'},
  {name: 'square-o'},
  {name: 'bookmark-o'},
  {name: 'twitter'},
  {name: 'facebook'},
  {name: 'facebook-f'},
  {name: 'bell-o'},
  {name: 'filter'},
  {name: 'group'},
  {name: 'users'},
  {name: 'copy'},
  {name: 'files-o'},
  {name: 'paperclip'},
  {name: 'floppy-o'},
  {name: 'save'},
  {name: 'square'},
  {name: 'bars'},
  {name: 'navicon'},
  {name: 'reorder'},
  {name: 'list-ul'},
  {name: 'table'},
  {name: 'truck'},
  {name: 'caret-down'},
  {name: 'caret-up'},
  {name: 'sort'},
  {name: 'unsorted'},
  {name: 'sort-desc'},
  {name: 'sort-down'},
  {name: 'sort-asc'},
  {name: 'sort-up'},
  {name: 'envelope'},
  {name: 'bell'},
  {name: 'file-text-o'},
  {name: 'plus-square'},
  {name: 'angle-double-right'},
  {name: 'angle-left'},
  {name: 'angle-right'},
  {name: 'angle-up'},
  {name: 'angle-down'},
  {name: 'mobile'},
  {name: 'mobile-phone'},
  {name: 'circle-o'},
  {name: 'quote-left'},
  {name: 'spinner'},
  {name: 'circle'},
  {name: 'folder-o'},
  {name: 'exclamation'},
  {name: 'rocket'},
  {name: 'bullseye'},
  {name: 'ellipsis-v'},
  {name: 'minus-square'},
  {name: 'minus-square-o'},
  {name: 'check-square'},
  {name: 'sort-alpha-asc'},
  {name: 'sort-alpha-desc'},
  {name: 'youtube'},
  {name: 'youtube-play'},
  {name: 'dot-circle-o'},
  {name: 'plus-square-o'},
  {name: 'file-pdf-o'},
  {name: 'file-excel-o'},
  {name: 'circle-o-notch'},
  {name: 'paper-plane'},
  {name: 'send'},
  {name: 'history'},
  {name: 'cc-visa'},
  {name: 'cc-mastercard'},
  {name: 'cc-discover'},
  {name: 'cc-amex'},
  {name: 'trash'},
  {name: 'paint-brush'},
  {name: 'area-chart'},
  {name: 'heartbeat'},
  {name: 'i-cursor'},
  {name: 'hand-pointer-o'},
  {name: 'address-card-o'},
  {name: 'vcard-o'},
  {name: 'drivers-license-o'},
  {name: 'id-card-o'},
  {name: 'import'},
  {name: 'arrow_back'},
  {name: 'attach_file'},
  {name: 'check2'},
  {name: 'navigate_before'},
  {name: 'navigate_next'},
  {name: 'close2'},
  {name: 'help'},
  {name: 'person'},
  {name: 'playlist_add'}
]
// let x = testResults.map(item => grabKeyFromObject(item, 'window'))
// x = {...x}
// let y = testResults.map(item => item['system'])
// y = {...y}
let uniqueIds = testResults.map(item => item.id)
uniqueIds = uniqueIds.filter((item, index) => uniqueIds.indexOf(item) === index )

// let testResultsNew =

let newArry = testResults
let x = Object.values(Object.values(newArry.sort((a, b) => a.id - b.id).sort((a, b) => Number.parseInt(a.id, 10) - Number.parseInt(b.id, 10)).map(item => ( {[item.id]: item}))))
let filteredList = uniqueIds.map(item => x.find(f => f[item]))
let filteredListB = uniqueIds.map(item => ({[item]: Object.values(newArry.filter(f => f.id === item))}))


const Device = props => {

  let { width, height, system, browserwidth, browserheight } = props

  return (
    <div style={{ width: Number.parseInt(width, 10)/6, height: Number.parseInt(height, 10)/6 }} className={['box-size m10 border background-white rounded border']}>
      <div className='box-size tooltip pink border rounded border-black p5' style={{ opacity: .75, width: Number.parseInt(browserwidth, 10)/6, height: Number.parseInt(browserheight, 10)/6, position: '' }}>
        <ToolTip light={false}><label className={['tooltiptext']}>.{system}</label></ToolTip>
        <label className='f10'>S. Width: {Number.parseInt(width, 10)}</label><br/>
        <label className='f10'>S. Height: {Number.parseInt(height, 10)}</label><br/>
        <label className='f10'>Br. Width: {Number.parseInt(browserwidth, 10)}</label><br/>
        <label className='f10'>Br. Height: {Number.parseInt(browserheight, 10)}</label>
        <p className='f10 truncate'>{system.substr(0, system.indexOf(')') + 1)}...</p>
      </div>
    </div>
  )
}

export default class Icons extends React.Component {
  componentDidMount() {
    Prism.highlightAll()
    let str = 'BUTTS_MCGOO'

    // console.log(camelCaseToDb(dbToCamelCase(str)))
    // console.log(dbToCamelCase(str))
    // x = x.map(item => grabKeyFromObject(item, 'window'))
    // x = JSON.parse(x)
    // '_3e9cx0xcb'
    // Object.values(x).map(item => console.log('testResults', Object.keys(item)))
    // console.log('filteredListB', testResults)
    // console.log('testResults', filteredList)
    // console.log('filteredListB', (filteredListB))
    // filteredListB.map(item => Object.values(item).map(i => console.log(i[0].id)))
    // console.log('_g0sihvdwm', filteredListB)
  }

  render() {

    return (
      <React.Fragment>
      <Header title='Icons' classNames={[]}/>
      <div style={{ display: 'flex', flexWrap: 'wrap' }} className='p10'>
        {/*filteredList.sort((a, b) => Object.values(a)[0].screenHeight - Object.values(b)[0].screenHeight).map(item => <Device browserwidth={Object.values(item)[0].browserInnerWidth} browserheight={Object.values(item)[0].browserInnerHeight} width={Object.values(item)[0].screenWidth} height={Object.values(item)[0].screenHeight} system={Object.values(item)[0].system}/>)*/}
      </div>
      <div className='p20'>
        <Heading type='h1' classNames={['underline thick']}>Icons</Heading>
        <div style={{ display: 'flex', flexWrap: 'wrap' }} className={['mb20']}>
          {iconList.map((icon, index) => (
            <div className='tooltiptext' onClick={() => <ToolTip >{icon.name}</ToolTip>}>
              <div className={['tooltip']} onClick={''}>
                <ToolTip light={false}><label className={['tooltiptext']}>.{icon.name}</label></ToolTip>
                <Icon icon={icon.name} classNames={['p10', 'Secondary']} styles={{ width: 20 }} size='sl'/>
              </div>
            </div>
          ))}
        </div>
        <div className='grid-2 grid-col-gap-20 grid-2-template-columns-right'>
          <div className='grid-item-1'>
            <div style={{ display: 'flex' }} className='underline thin'>
              <Icon icon='pencil' classNames={['Help', 'p5']} size='sm'/>
              <Heading type='h3' classNames={['uppercase', 'Help']}>Notes</Heading>
            </div>
            <p>
              For better or for worse, we started out using font-awesome then adopted material. Soon we needed custom icons. Juggling three icon libraries proved to be a pain in the ass, so we consolidated into one single IcoMoon repo.
            </p>
            <br/>
            <p>
              That being said, the <strong>Icon</strong> component prepends <strong>fa fa-</strong> to everything. Therefore, when using, simply pass in the name of the icon (ie. pencil) and it should work.
            </p>
            <br/>
            <p>
              Like the <strong>Headine</strong> component, <strong>Icon</strong> takes in an array of classes. This allows the developer to more easily pass in dynamic classes.
            </p>
            <br/>
            <p>
              For sizing, you can choose one of 7 sizes passed in as a string, or you can pass in a integer for precise sizing.
            </p>
            <br/>
            <div style={{ display: 'flex' }} className='underline thin'>
              <Icon icon='bullseye' classNames={['Help', 'p5']} size='sm'/>
              <Heading type='h3' classNames={['uppercase', 'Help']}>Properties</Heading>
            </div>
            <p className=''><strong>Children: </strong>node</p>
            <p className=''><strong>Class Names: </strong>array</p>
            <p className=''><strong>Sizes: </strong>
              Select One(32px, 24px, 16px, 13px)
            </p>
            <p className=''><strong>Type: </strong>
              Select One(h1, h2, h3, h4)
            </p>
          </div>

          <div className='grid-item-2'>
            {headingList.map((item, index) => (
              <Markup
                key={index}
                item={item}
                str={`import { Icon } from '@jedhelmers/stylesheet/src/components/atoms/Icon'\n\n<Icon icon='${item.type}' \n\tclassNames={['${item.classNames.join("', '")}']} \n\tsize='${item.size}'\n/>`}
                func={<Icon icon={item.type} classNames={item.classNames} size={item.size}/>}
              />
            ))}
          </div>

        </div>

      </div>
      </React.Fragment>
    )
  }
}
