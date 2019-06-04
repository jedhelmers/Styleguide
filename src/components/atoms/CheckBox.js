import React, { Component } from 'react'
import { Icon } from './Icon'
import { toTitleCase, FieldStatus } from '../../utils/helpers'

// const Body = props => {
//   let { name, classNames, children, checked, actions } = props
//   return (
//     <p name={name} className="input-checkbox"  onClick={(e) => props.onChange(e, name)}>{children}
//       <input name={name} type="checkbox" checked={checked}/>
//       <Icon name={name} icon={[checked && 'check2']} classNames={['checkmark']} size='sl'/>
//     </p>
//   )
// }

const Body = props => {
  let { name, classNames, children, checked, actions } = props
  return (
    <P name={name} classNames={['checkmark']} checked={true} actions=''>{children}</P>
  )
}

export const CheckBox = props => {
  let { name, classNames, children, checked, actions } = props

  return React.createElement(
    'label',
    {
      className: [classNames].join(' '),
      onClick: actions
    },
      <Body name='checkbox' classNames='' checked={true} actions=''>HEY! {children}</Body>
  )
}

const P = props => {
  let { name, classNames, children, checked, actions } = props

  return React.createElement (
    'p',
    {
      name: {name},
      className: "input-checkbox",
      onClick: (e) => props.onChange(e, name)
    },
      children,
      <Input name={name} checked={checked}/>,
      <Icon name={name} icon={[checked && 'check2']} classNames={['checkmark']} size='sl'/>
  )
}

const Input = props => {
  let { name, checked } = props

  return React.createElement (
    'input',
    {
      name: {name},
      type: "checkbox",
      checked: {checked}
    },

  )
}
