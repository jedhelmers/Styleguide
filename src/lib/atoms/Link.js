import React from 'react'

export const Link = (props) => {
  let {
    className,
    action,
    children,
    to
  } = props

  return React.createElement(
    'a',
    {
      className: className,
      onClick: action,
      href: to
    },
    children
  )
}
