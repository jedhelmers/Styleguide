import React, { Component } from 'react'
import { Icon } from './Icon'
import { Label } from './Label'
import { toTitleCase, FieldStatus } from '../../utils/helpers'

const actionHandler = (focused, direction, func = []) => {
  for(let i = 0; i < func.length; i++){
    func[i].call()
  }
  focused = direction
}

export const Select = (props) => {
  let focused = 'idle'

  let {
    name,
    children,
    onChange = [],
    onBlur = [],
    onFocus = [],
    classNames = [],
    value,
    required = false,
    type = 'text',
    error = '',
    dark = false
  } = props

  return (
    <React.Fragment>

    <div className={[focused !== 'idle' && 'border-primary', 'flex-spacebetween mb10 field-wrapper', focused === 'in' && 'field-wrapper-focus', error && `field-wrapper-${error.toLowerCase()}`, classNames.join(' ')].join(' ')} style={{ height: 55 }}>
      <div className='flex-reverse-v' style={{ width: '100%' }}>
        <select>

        </select>
        <Label className={[value === '' ? focused : ''].join(' ')}>{children}</Label>
      </div>
      {error !== '' && (
        <Icon icon='exclamation-triangle' classNames={[error]} size='md' styles={{ paddingTop: 10 }}/>
      )}
    </div>
    {error !== '' && (
      <FieldStatus error={error} name={name}/>
    )}
    </React.Fragment>
  )
}
