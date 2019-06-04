import React from 'react';
import { Heading } from '../../../lib/atoms/Heading'
import { Header } from '../components/Header'

export default function ContentLayout() {
  return (
    <React.Fragment>
    <Header title='Content Layout' classNames={[]}/>
    <div className='p20'>
      <Heading type='h1' classNames={['underline thick']}>Content Layout</Heading>
    </div>
    </React.Fragment>
  )
}
