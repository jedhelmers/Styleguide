import React from 'react'

export const Button = (props) => {
  let {
    children = 'Add children',
    style = 'default',
    name = 'name',
    type = 'primary',
    classNames = [],
    icon = false,
    action = '',
    size = 'regular'
  } = props

  return (
    React.createElement(
      'button',
      {
        name: name,
        className: [style, classNames.join(' '), size].join(' '),
        onClick: action,
        style: (
          !icon
          ? { minWidth: 100, display: 'flex', justifyContent: 'center', paddingLeft: 10, paddingRight: 10 }
          : { borderRadius: 50, fontSize: 12, height: 28, width: 28, border: 'none' }
        ),
      },
      React.createElement(
        'span',
        {
          style: { fontSize: 'inherit'}
        },
        children
      )
    )


  )
}
//
// 'primary', 'secondary', 'tertiary-o', 'tertiary', 'textOnly', 'rounded'
//
// 'button', 'reset', 'submit'
