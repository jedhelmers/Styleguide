import React from 'react'

export const Label = (props) => {
  let {
    className = [],
    action,
    children = 'Add children'
  } = props

  return React.createElement(
    'label',
    {
      className: className,
      onClick: action
    },
    children
  )
}
