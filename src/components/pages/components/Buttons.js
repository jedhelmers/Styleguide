import React from 'react';
import { Heading } from '../../atoms/Heading'
import { Header } from '../components/Header'

export default function Buttons() {
  return (
    <React.Fragment>
    <Header title='Buttons' classNames={[]}/>
    <div className='p20'>
      <Heading type='h1' classNames={['underline thick']}>Buttons</Heading>
    </div>
    </React.Fragment>
  )
}
