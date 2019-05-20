import React from 'react';
import { Heading } from '../../atoms/Heading'
import { Header } from '../components/Header'

export default function PageLayout() {
  return (
    <React.Fragment>
    <Header title='Page Layout' classNames={[]}/>
    <div className='p20'>
      <Heading type='h1' classNames={['underline thick']}>Page Layout</Heading>
    </div>
    </React.Fragment>
  )
}
