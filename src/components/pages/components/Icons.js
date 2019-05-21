import React from 'react'
import { Heading } from '../../atoms/Heading'
import { Icon } from '../../atoms/Icon'
import { Header } from '../components/Header'
import { Markup } from '../../../utils/helpers'
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


export default class Icons extends React.Component {
  componentDidMount() {
    Prism.highlightAll()
  }

  render() {

    return (
      <React.Fragment>
      <Header title='Icons' classNames={[]}/>
      <div className='p20'>
        <Heading type='h1' classNames={['underline thick']}>Icons</Heading>
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
                str={`<Icon icon='${item.type}' \n\tclassNames={['${item.classNames.join("', '")}']} \n\tsize='${item.size}'\n/>`}
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
