import React from 'react';
import { Heading } from '../../../lib'
import { Icon } from '../../../lib'
import { Button } from '../../../lib'
import { Header } from '../components/Header'
import { Markup } from '../../../utils/helpers'
import Prism from "prismjs"

function bam(txt){
  alert(txt)
}

const headingList = [
  {
    type: 'Primary',
    style: 'primary',
    classNames: [],
    size: 'regular',
    icon: false,
    body: 'Click me',
    bodyString: `'Click me'`
  },
  {
    type: 'Secondary - Large',
    style: 'secondary',
    classNames: [],
    size: 'large',
    icon: false,
    body: 'Click me',
    bodyString: `'Click me'`
  },
  {
    type: 'Tertiary - ',
    style: 'tertiary',
    classNames: ['square'],
    size: 'regular',
    icon: false,
    body: 'Click me',
    bodyString: `'Click me'`
  },
  {
    type: 'Tertiary Outline',
    style: 'tertiary-o',
    classNames: [],
    size: 'regular',
    icon: false,
    body: 'Click me',
    bodyString: `'Click me'`
  },
  {
    type: 'Text Only - Winblue',
    style: 'textOnly-winblue',
    classNames: [],
    size: 'regular',
    icon: false,
    body: 'Click me',
    bodyString: `'Click me'`
  },
  {
    type: 'Text Only - Error',
    style: 'textOnly-error',
    classNames: [],
    size: 'regular',
    icon: false,
    body: 'Click me',
    bodyString: `'Click me'`
  },
  {
    type: 'Primary Icon - close2',
    style: 'primary',
    classNames: [],
    size: 'regular',
    icon: true,
    body: <Icon icon='close2' classNames={[]} size='xsl'/>,
    bodyString: `<Icon icon='close2' classNames={[]} size='xsl'/>`
  },
  {
    type: 'Tertiary Icon - pencil',
    style: 'tertiary',
    classNames: [],
    size: 'regular',
    icon: true,
    body: <Icon icon='pencil' classNames={[]} size='xsl'/>,
    bodyString: `<Icon icon='pencil' classNames={[]} size='xsl'/>`
  },
  {
    type: 'Primary Icon - undelete',
    style: 'primary',
    classNames: [],
    size: 'regular',
    icon: true,
    body: <Icon icon='undelete' classNames={[]} size='xsl'/>,
    bodyString: `<Icon icon='undelete' classNames={[]} size='xsl'/>`
  },
  {
    type: 'Tertiary Icon - scan-gun',
    style: 'tertiary-o',
    classNames: ['clickable'],
    size: 'regular',
    icon: true,
    body: <Icon icon='scan-gun' classNames={[]} size={24}/>,
    bodyString: `<Icon icon='scan-gun' classNames={[]} size={24}/>`
  },
  {
    type: 'Primary w/ Icon & inline text',
    style: 'primary',
    classNames: [],
    size: 'regular',
    icon: false,
    body: <React.Fragment><Icon icon='minus' classNames={['pr5']} size='xsl'/> Click Me</React.Fragment>,
    bodyString: `<Icon icon='minus' classNames={['pr5']} size='sm'/> Click Me`
  },
  {
    type: 'Tertiary w/ Icon & inline text',
    style: 'tertiary',
    classNames: [],
    size: 'regular',
    icon: false,
    body: <React.Fragment><Icon icon='trash' classNames={['pr5']} size='xsl'/> Delete</React.Fragment>,
    bodyString: `<Icon icon='minus' classNames={['pr5']} size='sm'/> Delete`
  },
  {
    type: 'Rounded w/ Icon & inline text',
    style: 'rounded',
    classNames: ['pr10'],
    size: 'regular',
    icon: false,
    body: <React.Fragment><Icon icon='plus' classNames={['pr5']} size='xsl'/> Add Something</React.Fragment>,
    bodyString: `<Icon icon='plus' classNames={['pr5']} size='sm'/> Add Something`
  }
]

export default class Buttons extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render(){
    return (
      <React.Fragment>
      <Header title='Buttons' classNames={[]}/>
      <div className='p20'>
        <Heading type='h1' classNames={['underline thick']}>Buttons</Heading>
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

            <p className=''><strong>children: </strong>String</p>
            <p className=''><strong>style: </strong>String</p>
            <p className=''><strong>name: </strong>String</p>
            <p className=''><strong>type: </strong>String</p>
            <p className=''><strong>classNames: </strong>Array of classes</p>
            <p className=''><strong>icon: </strong>Boolean</p>
            <p className=''><strong>action: </strong>Function</p>
            <p className=''><strong>size: </strong>String</p>
            <br/>
            <p className=''><strong>Sizes: </strong>
              Select One(regular, large) - default value is regular
            </p>
            <p className=''><strong>Style: </strong>
              Select One(primary, secondary, tertiary, tertiary-o, textOnly)
            </p>
            <p className=''><strong>Icon: </strong>
              True will remove the border and round out the button. Default is false
            </p>
            <p className=''><strong>ClassNames: </strong>
              To remove button-rounding add the <strong>.square</strong> class to your button.
            </p>
          </div>

          <div className='grid-item-2'>
            {headingList.map((item, index) => (
              <Markup
                key={index}
                item={item}
                str={`import { Button } from '@jedhelmers/stylesheet/src/lib/atoms/Buttons'\n\n<Button \n\tname={'name'} \n\tstyle={'${item.style}'} \n\tsize='${item.size}' \n\ticon={${item.icon}} \n\tclassNames={['${item.classNames}']} \n\taction={() => bam(${item.type})}\n>\n\t${item.bodyString}\n</Button>`}
                func={<Button name={'name'} style={item.style} size={item.size} icon={item.icon} classNames={item.classNames} action={() => bam(item.type)}>{item.body}</Button>}
              />
            ))}
          </div>

        </div>

      </div>
      </React.Fragment>
    )
  }
}


//
//
// <Button
//   name='primary'
//   style='primary'
//   action={() => bam('sample text')}
//   icon={true}
// >
//   <Icon icon='plus' classNames={['White']} size='lg'/>
// </Button>
