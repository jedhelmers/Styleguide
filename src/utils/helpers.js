import React from 'react'
import { Heading } from '../components/atoms/Heading'

export const toTitleCase = (camelCase) => camelCase
  .replace(/([A-Z])/g, (match) => ` ${match}`)
  .replace(/^./, (match) => match.toUpperCase());

export function hexToRgb(hex, type) {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex[type]);
      const x = result ? (parseInt(result[1], 16) + parseInt(result[2], 16) + parseInt(result[3], 16)) : null
      return x;
  }

export const isEmptyArray = (arry = []) => {
  return arry.length > 0 ? `.${arry.join(' .')}` : <span className='Help italic'>None</span>
}

export const isNumberSize = (txt) => {
  return typeof txt === 'number' ? `${txt}px` : txt
}

export const Markup = props => {
  let {
    item,
    str,
    func
  } = props

  return (
    <React.Fragment>
    <div style={{ display: 'flex' }} className='underline thin'>
      <Heading type='h3' classNames={['uppercase', 'Help']}>{item.type} {item.classNames.join(' ')}</Heading>
    </div>
    <div className='background-white p10 border'>
      {func}
    </div>
    <div style={{ backgroundColor: 'var(--win-chroma-7)'}}>
      <pre>
        <code className="language-javascript">
          {str}
        </code>
      </pre>
    </div>

    <Heading type='h3' classNames={['uppercase', 'Help', 'underline thin']}>Heading type H1 details</Heading>
    <p className=''><strong>Size: </strong>{isNumberSize(item.size)}</p>
    <p className='mb30'><strong>ClassNames: </strong>{isEmptyArray(item.classNames)}</p>
    </React.Fragment>
  )
}
