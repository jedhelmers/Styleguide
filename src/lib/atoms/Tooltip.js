import React from 'react'
import { Heading } from './Heading'

export const ToolTip = props => {
  let {
    title,
    subtitle,
    children,
    light = true
  } = props

  return (
    <div >
      <div>
        {typeof title !== 'undefined' && (
          <Heading type='h3' classNames={[light ? 'White' : 'Chroma8']}>{title}</Heading>
        )}
        {typeof subtitle !== 'undefined' && (
          <Heading type='h4' classNames={[light ? 'White' : 'Chroma8', 'uppercase']}>{subtitle}</Heading>
        )}
        <p className={[light ? 'White' : 'Chroma8']}>
          {children}
        </p>
      </div>
    </div>
  )
}
