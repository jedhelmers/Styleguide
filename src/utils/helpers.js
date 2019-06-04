import React from 'react'
import { Heading } from '../lib/atoms/Heading'
import { Icon } from '../lib/atoms/Icon'

export function realHexToRgb(hex){
  hex = parseInt(hex.replace(/^#/, ''), 16)
  var r = hex >> 16;
  var g = hex >> 8 & 0xFF;
  var b = hex & 0xFF;
  return [r,g,b];
}

export function dbToCamelCase(str){
    str = (str.toLowerCase()).replace(/_([a-z])/g, function (m, w) {
        return w.toUpperCase()
    })
    return str
}

export function camelCaseToDb(str){
  return str.split(/(?=[A-Z])/).join('_').toUpperCase()
}

export function grabKeyFromObject(item, key) {
  let x = item[key].split(', ')
  x = x.map(y => arryToObject(y))
  return x
}

export function arryToObject(item) {
  const arry = new Map([item.split(': ')])
  return {...Object.fromEntries(arry)}
}

export const toTitleCase = (camelCase) => camelCase
  .replace(/([A-Z])/g, (match) => ` ${match}`)
  .replace(/^./, (match) => match.toUpperCase());

export function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  const x = result ? (parseInt(result[1], 16) + parseInt(result[2], 16) + parseInt(result[3], 16)) : null
  return x;
}

export const isEmptyArray = (arry = []) => {
  return arry.length > 0 ? `.${arry.join(' .')}` : <span className='Help italic'>None</span>
}

export const isNumberSize = (txt) => {
  return typeof txt === 'number' ? `${txt}px` : txt
}

export function generateUID() {
  return (
    Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  )
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
      <Heading type='h3' classNames={['Winblue']}>{toTitleCase(item.type)} {typeof item.classNames !== 'undefined' ? ` - .${item.classNames.join(' .')}` : ''}</Heading>
    </div>
    <div className='background-chroma-2 p10 border'>
      {func}
    </div>
    <div style={{ backgroundColor: 'var(--win-chroma-7)'}}>
      <pre>
        <code className="language-javascript">
          {str}
        </code>
      </pre>
    </div>

    <Heading type='h3' classNames={['Help', 'underline thin']}>Meta</Heading>
    <p className=''><strong>Size: </strong>{isNumberSize(item.size)}</p>
    <p className='mb30'><strong>ClassNames: </strong>{isEmptyArray(item.classNames)}</p>
    </React.Fragment>
  )
}

export const FieldStatus = props => {
  let { error, name } = props
  return (
    <div className='flex-spacebetween'>
      <Icon icon='close2' classNames={[error]} size='md'/>
      <p className={error}>Please enter a valid {toTitleCase(name)}</p>
    </div>)
}
