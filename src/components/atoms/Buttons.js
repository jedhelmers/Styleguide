import React from 'react'
import PropTypes from 'prop-types'

export const Button = props => {
  let {
    children,
    style = 'default',
    name,
    type,
    classNames,
    icon = false,
    action,
    size = 'regular'
  } = props

  return (
      <button
        name={name}
        className={[style, classNames.join(' '), size].join(' ')}
        style={
          !icon
          ? { minWidth: 100, display: 'flex', justifyContent: 'center', paddingLeft: 10, paddingRight: 10 }
          : { borderRadius: 50, fontSize: 12, height: 28, width: 28, border: 'none' }
        }
        onClick={action}
      >
        <span style={{ fontSize: 'inherit'}}>{children}</span>
      </button>
  )
}
//
// 'primary', 'secondary', 'tertiary-o', 'tertiary', 'textOnly', 'rounded'
//
// 'button', 'reset', 'submit'
