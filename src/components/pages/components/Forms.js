import React from 'react';
import { Heading } from '../../atoms/Heading'
import { Icon } from '../../atoms/Icon'
import { Field } from '../../atoms/Field'
import { Header } from '../components/Header'
import { Markup } from '../../../utils/helpers'
import Prism from "prismjs"
import '../../../utils/markup.css'

let formList = [
  {
    name: 'username',
    onChange: 'shorter hair',
    onBlur: '',
    onFocus: '',
    required: true,
    type: 'text',
    value: 'hot',
    children: 'Username',
  },
  {
    name: 'firstName',
    onChange: '',
    onBlur: '',
    onFocus: '',
    required: false,
    type: 'text',
    value: '',
    children: 'First Name',
  },
  {
    name: 'lastName',
    onChange: '',
    onBlur: '',
    onFocus: '',
    required: false,
    type: 'text',
    value: '',
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
  },
  [
    {
      name: 'password',
      onChange: '',
      onBlur: '',
      onFocus: '',
      required: false,
      type: 'password',
      value: '',
      children: 'Password',
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
    },
  ]
]

function clicked(){
  return alert('clicked')
}

export default class Forms extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render(){
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
              <Icon icon='user' classNames={['Help', 'p5']} size='sm'/>
              <Heading type='h3' classNames={['uppercase', 'Help']}>Text Field</Heading>
            </div>
            {formList.map((item, index) => (

              <Markup
                key={index}
                item={item}
                str={`<Field\n\tname={'${item.name}'}\n\tonChange={'${item.onChange}'}\n\tonBlur={'${item.onBlur}'}\n\tonFocus={'${item.onFocus}'}\n\trequired={'${item.required}'}\n\ttype={'${item.type}'}\n\tvalue={'${item.value}'}\n>\n\t{'${item.children}'}\n</Field>`}
                func={<Field name={item.name} onChange={item.onChange} onBlur={item.onBlur} onFocus={item.onFocus} required={item.required} type={item.type} value={item.value}>{item.children}</Field>}
              />

            ))}

            <div className='grid-2 grid-col-gap-20 '>
              <Field name={'name'}>Address</Field>
              <Field name={'name'}>State</Field>
            </div>
          </div>
        </div>
      </div>
      </React.Fragment>
    )
  }
}
