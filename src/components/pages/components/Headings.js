import React from 'react'
import { Heading } from '../../atoms/Heading'
import { Icon } from '../../atoms/Icon'
import { Header } from '../components/Header'
import { Markup } from '../../../utils/helpers'
import Prism from "prismjs"
import '../../../utils/markup.css'

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
    classNames: ['Secondary', 'bold', 'uppercase'],
    size: 32
  },
  {
    type: 'h1',
    classNames: ['Winblue', 'uppercase'],
    size: 32
  },
  {
    type: 'h1',
    classNames: ['Alert', 'underline', 'thin'],
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
  {
    type: 'h4',
    classNames: [],
    size: 13
  },
  {
    type: 'h4',
    classNames: ['Help'],
    size: 13
  },
  {
    type: 'h4',
    classNames: ['bold', 'uppercase'],
    size: 13
  },
  {
    type: 'h4',
    classNames: ['Help', 'bold', 'uppercase'],
    size: 13
  },
  {
    type: 'h4',
    classNames: ['underline', 'thin'],
    size: 13
  },
]

export default class Headings extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {

    return (
      <React.Fragment>
      <Header title='Headings' classNames={[]}/>
      <div className='p20 scrollable'>
        <Heading type='h1' classNames={['underline thick']}>Headings</Heading>
        <div className='grid-2 grid-col-gap-20 grid-2-template-columns-right'>
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
                str={`import { Heading } from '@jedhelmers/stylesheet/src/components/atoms/Heading'\n\n<Heading type='${item.type}' classNames={['${item.classNames.join("', '")}']}>\n\tThe quick funky wizards leap over vases\n</Heading>`}
                func={<Heading type={item.type} classNames={item.classNames}>The Five Boxing Wizards Jump Quickly. 1234567890</Heading>}
              />
            ))}
          </div>



        </div>

      </div>
      </React.Fragment>
    )
  }
}
