import React from 'react'
import PropTypes from 'prop-types'

export const Heading = props => {
  let {
    children,
    type,
    classNames
  } = props

  return (
    React.createElement (
      type,
      {className: classNames.join(' ')},
      [children]
    )
  )
}
