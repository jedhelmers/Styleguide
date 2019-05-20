import React from 'react'
import { Heading } from '../../atoms/Heading'
import { Icon } from '../../atoms/Icon'
import { Header } from '../components/Header'
import Prism from "prismjs"
import '../../../utils/markup.css'

const x = () => {
  return <Heading type='h1' classNames={[]}>The quick funky wizards leap over vases</Heading>
}

const headingList = [
  {
    type: 'h1',
    classNames: [],
    size: 32
  },
  {
    type: 'h1',
    classNames: ['Help'],
    size: 32
  },
  {
    type: 'h1',
    classNames: ['bold', 'uppercase'],
    size: 32
  },
  {
    type: 'h1',
    classNames: ['Help', 'bold', 'uppercase'],
    size: 32
  },
  {
    type: 'h1',
    classNames: ['underline', 'thin'],
    size: 24
  },
  {
    type: 'h2',
    classNames: [],
    size: 24
  },
  {
    type: 'h2',
    classNames: ['Help'],
    size: 24
  },
  {
    type: 'h2',
    classNames: ['bold', 'uppercase'],
    size: 24
  },
  {
    type: 'h2',
    classNames: ['Help', 'bold', 'uppercase'],
    size: 24
  },
  {
    type: 'h2',
    classNames: ['underline', 'thin'],
    size: 24
  },
  {
    type: 'h3',
    classNames: [],
    size: 16
  },
  {
    type: 'h3',
    classNames: ['Help'],
    size: 16
  },
  {
    type: 'h3',
    classNames: ['bold', 'uppercase'],
    size: 16
  },
  {
    type: 'h3',
    classNames: ['Help', 'bold', 'uppercase'],
    size: 16
  },
  {
    type: 'h3',
    classNames: ['underline', 'thin'],
    size: 16
  },
]

function markup(item) {
  return (
    <React.Fragment>
    <div style={{ display: 'flex' }} className='underline thin'>
      <Heading type='h3' classNames={['uppercase', 'Help']}>{item.type} {item.classNames.join(' ')}</Heading>
    </div>
    <div className='background-white p10 border'>
      <Heading type={item.type} classNames={item.classNames}>The quick funky wizards leap over vases</Heading>
    </div>
    <div style={{ backgroundColor: 'var(--win-chroma-7)'}}>
      <pre>
        <code className="language-javascript">
          {`<Heading type='${item.type}' classNames={['${item.classNames.join("', '")}']}>\n\tThe quick funky wizards leap over vases\n</Heading>`}
        </code>
      </pre>
    </div>

    <Heading type='h3' classNames={['uppercase', 'Help', 'underline thin']}>Heading type H1 details</Heading>
    <p className=''><strong>Size: </strong>{item.size}px</p>
    <p className='mb30'><strong>Classes: </strong>.{item.classNames.join(' .')}</p>
    </React.Fragment>
  )
}

export default class Headings extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {

    return (
      <React.Fragment>
      <Header title='Headings' classNames={[]}/>
      <div className='p20'>
        <Heading type='h1' classNames={['underline thick']}>Headings</Heading>
        <div className='grid-2 grid-col-gap-20'>
          <div className='grid-item-1'>
            <div style={{ display: 'flex' }} className='underline thin'>
              <Icon icon='pencil' classNames={['Help', 'p5']} size='sm'/>
              <Heading type='h3' classNames={['uppercase', 'Help']}>Notes</Heading>
            </div>
            <p>
              A component for marking up page headings. Provide the component a tagName appropriate for the current document outline, and a standardized size. Additional visual styling can be accomplished by passing in font-* utility classes.
            </p>
            <br/>
            <p>
              By separating the visual style and HTML element of heading elements, we can ensure that pages have appropriate, accessible document outlines without having to worry about changing visuals.
            </p>
            <br/>
            <p>
              For more information, see <a target='_blank' href='https://csswizardry.com/2016/02/managing-typography-on-large-apps/'>Managing Typography on Large Apps</a>and <a target='_blank' href='https://www.alexlande.com/articles/abandoning-global-heading-styles/'>Abandoning Global Heading Styles</a>.
            </p>
            <br/>
            <div style={{ display: 'flex' }} className='underline thin'>
              <Icon icon='bullseye' classNames={['Help', 'p5']} size='sm'/>
              <Heading type='h3' classNames={['uppercase', 'Help']}>Properties</Heading>
            </div>
            <p className=''><strong>Children: </strong>node</p>
            <p className=''><strong>Class Names: </strong>array</p>
            <p className=''><strong>Type: </strong>
              Select One('h1', 'h2', 'h3', 'h4')
            </p>

          </div>

          <div className='grid-item-2'>
            {headingList.map(item => markup(item))}
          </div>



        </div>

      </div>
      </React.Fragment>
    )
  }
}
