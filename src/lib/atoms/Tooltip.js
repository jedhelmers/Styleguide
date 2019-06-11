import React from 'react'
import { Heading } from './Heading'

export const ToolTip = props => {
  let {
    title,
    subtitle,
    children = 'Add children',
    light = true
  } = props

  return (
    React.createElement(
      'div',
      {
        className: ''
      },
      React.createElement(
        'div',
        {
          className: ''
        },
        typeof title !== 'undefined' && (
          React.createElement(
            Heading,
            {
              type: 'h3',
              classNames: [light ? 'White' : 'Chroma8']
            },
            'title'
          )
        ),
        typeof subtitle !== 'undefined' && (
          React.createElement(
            Heading,
            {
              type: 'h4',
              classNames: [light ? 'White' : 'Chroma8', 'uppercase']
            },
            subtitle
          )
        ),
        React.createElement(
          'p',
          {
            className: [light ? 'White' : 'Chroma8']
          },
          children
        )
      )
    )

  )
}
