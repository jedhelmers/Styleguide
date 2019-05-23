import React from 'react'
import { Heading } from './Heading'

export const ToolTip = props => {
  let {
    title,
    subtitle,
    children
  } = props

  return (
    <div >
      <div>
        {typeof title !== 'undefined' && (
          <Heading type='h3' classNames={['White']}>{title}</Heading>
        )}
        {typeof subtitle !== 'undefined' && (
          <Heading type='h4' classNames={['uppercase']}>{subtitle}</Heading>
        )}
        <p>
          {children}
        </p>
      </div>
    </div>
  )
}
