import React from 'react';
import { Heading } from '../../atoms/Heading'
import { Icon } from '../../atoms/Icon'
import { Field, CheckBox } from '../../atoms/Field'
import { Header } from '../components/Header'
import { Markup, hexToRgb, realHexToRgb } from '../../../utils/helpers'
import Prism from "prismjs"
import '../../../utils/markup.css'

let formList = [
  {
    name: 'userName',
    onBlur: '',
    onFocus: '',
    required: true,
    type: 'text',
    value: 'hot',
    error: 'Error',
    children: <div className='flex-start-h'><Icon icon='user' classNames={['Help', 'pr5']} size='sl'/>Username</div>,
  },
  {
    name: 'firstName',
    onChange: '',
    onBlur: '',
    onFocus: '',
    required: false,
    type: 'text',
    value: '',
    error: 'Warning',
    children: <div className='flex-start-h'><Icon icon='scan-gun' classNames={['pr5']} size='md'/>Scan or Enter location</div>,
  },
  {
    name: 'lastName',
    onChange: '',
    onBlur: '',
    onFocus: '',
    required: false,
    type: 'text',
    value: '',
    error: 'Alert',
    children: 'Last Name',
  },
  {
    name: 'password',
    onChange: '',
    onBlur: '',
    onFocus: '',
    required: false,
    type: 'password',
    value: '',
    children: 'Password',
  }
]

function clicked(){
  return alert('clicked')
}

export default class Forms extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      checkbox1: true
    }

    this.anotherAction = this.anotherAction.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event, nameIn) {
    const target = event.target
    const name = typeof target.name !== 'undefined' ? target.name : nameIn
    const value = target.type === 'checkbox' ? !this.state[name] : target.value

    this.setState({
      [name]: !this.state[name]
    })
    console.log('FORMS: ', name)
  }

  componentDidMount() {
    Prism.highlightAll()
  }

  anotherAction = () => {
    alert('Butt')
  }

  render(){
    let { checkbox1 } = this.state
    return (
      <React.Fragment>
      <Header title='Forms' classNames={[]}/>
      <div className='p20'>
        <Heading type='h1' classNames={['underline thick']}>Forms</Heading>
        <div className='grid-2 grid-col-gap-20 grid-row-gap-20'>
          <div className='grid-item-1'>

          <div style={{ display: 'flex' }} className='underline thin'>
            <Icon icon='pencil' classNames={['Help', 'p5']} size='sm'/>
            <Heading type='h3' classNames={['uppercase', 'Help']}>Notes</Heading>
          </div>
          <p>
            A form field with floating labels and validation support.
          </p>
          <br/>
          <div style={{ display: 'flex' }} className='underline thin'>
            <Icon icon='bullseye' classNames={['Help', 'p5']} size='sm'/>
            <Heading type='h3' classNames={['uppercase', 'Help']}>Properties</Heading>
          </div>
          <p className=''><strong>name: </strong>node</p>
          <p className=''><strong>children: </strong>node</p>
          <p className=''><strong>onChange: </strong>node</p>
          <p className=''><strong>onBlur: </strong>node</p>
          <p className=''><strong>onFocus: </strong>node</p>
          <p className=''><strong>value: </strong>node</p>
          <p className=''><strong>required: </strong>node</p>
          <p className=''><strong>type: </strong>node</p>
          <p className=''><strong>Sizes: </strong>
            Select One(32px, 24px, 16px, 13px)
          </p>
          <p className=''><strong>Type: </strong>
            Select One(h1, h2, h3, h4)
          </p>

          </div>


          <div className='grid-item-2'>
            <div style={{ display: 'flex' }} className='underline thin'>
              <Icon icon='check2' classNames={['Help', 'p5']} size='sm'/>
              <Heading type='h3' classNames={['uppercase', 'Help']}>CheckBox</Heading>
            </div>
            <Markup
              key={1}
              item={{ name: 'CheckBox', type: 'CheckBox'}}
              str={`import { CheckBox } from '@jedhelmers/stylesheet/src/components/atoms/Field'\n\n<CheckBox \n\tname={'checkbox1'} \n\tchecked={checkbox1} \n\tonChange={this.handleInputChange}\n>\n\tCheckbox\n</CheckBox>`}
              func={<CheckBox name={'checkbox1'} checked={checkbox1} onChange={this.handleInputChange}>Checkbox</CheckBox>}
            />
            <div style={{ display: 'flex' }} className='underline thin mt10'>
              <Icon icon='i-cursor' classNames={['Help', 'p5']} size='sm'/>
              <Heading type='h3' classNames={['uppercase', 'Help']}>Text Field</Heading>
            </div>

            {formList.map((item, index) => (

              <Markup
                key={index}
                item={item}
                str={`import { Field } from '@jedhelmers/stylesheet/src/components/atoms/Field'\n\n<Field\n\terror={${item.error}}\n\tname={'${item.name}'}\n\tonChange={'${item.onChange}'}\n\tonBlur={'${item.onBlur}'}\n\tonFocus={'${item.onFocus}'}\n\trequired={'${item.required}'}\n\ttype={'${item.type}'}\n\tvalue={'${item.value}'}\n>\n\t{'${item.children}'}\n</Field>`}
                func={<Field error={item.error} name={item.name} onChange={(e) => this.handleInputChange(e, item.name)} onBlur={item.onBlur} onFocus={item.onFocus} required={item.required} type={item.type} value={item.value}>{item.children}</Field>}
              />

            ))}

            <div className='grid-2 grid-col-gap-20 '>
              <Field name={'name'} onBlur={[() => this.anotherAction()]}>Address</Field>
              <Field name={'name'}>State</Field>
            </div>
          </div>
        </div>
      </div>
      </React.Fragment>
    )
  }
}
