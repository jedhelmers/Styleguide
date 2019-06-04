import React from 'react'
import { Heading } from '../../../lib'
import { Icon } from '../../../lib'
import { ToolTip } from '../../../lib'
import { Header } from '../components/Header'
import { Markup, dbToCamelCase, camelCaseToDb, grabKeyFromObject, arryToObject } from '../../../utils/helpers'
import { testResults } from '../../../utils/colordata'
import { iconList } from '../../../utils/iconList'
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


export default class Icons extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      apple: true,
      chrome: true,
      safari: true,

    }
  }

  componentDidMount() {
    Prism.highlightAll()
    let str = 'BUTTS_MCGOO'

  }

  render() {
    let { apple, safari, chrome } = this.state
    return (
      <React.Fragment>
      <Header title='Icons' classNames={[]}/>
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
                str={`import { Icon } from '@jedhelmers/stylesheet/src/lib/atoms/Icon'\n\n<Icon icon='${item.type}' \n\tclassNames={['${item.classNames.join("', '")}']} \n\tsize='${item.size}'\n/>`}
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
