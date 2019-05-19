import React from 'react'
import { Link } from 'react-router-dom'
import { Heading } from '../../atoms/Heading'

export const Header = props => {
  let {
    title
  } = props

  return (
    <div className='header p20 flex-start-h'>
      <Link to='/pattern-library'>
        <div style={{ backgroundImage: 'var(--win-logo)', width: 120, height: 90, backgroundRepeat: 'no-repeat', backgroundSize: 'auto', marginRight: 20 }}></div>
      </Link>
      <Heading type='h3' classNames={['bold', 'Secondary', 'uppercase']}>{title}</Heading>
    </div>
  )
}
