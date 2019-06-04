import React from 'react';
import { Heading } from '../../../lib'
import { Header } from '../components/Header'

export default function Spacing() {
  return (
    <React.Fragment>
      <Header title='Spacing'/>
      <div className='p20'>
        <Heading type='h3' classNames={['bold underline thick']}>Space Scale</Heading>
          <p>
            Spacing is achieved through the use of predictably-named utility classes. Padding and margin can be inserted into classes as needed.
          </p>
        <div className='grid-3'>
          <div className='grid-item-1'>
            <Heading type='h3' classNames={['bold underline thick']}>Padding</Heading>
            <p>.p5</p>
            <p>.p10</p>
            <p>.p15</p>
            <p>.p20</p>
            <p>.p30</p>
            <p>.p5</p>
            <p>.pl10</p>
            <p>.pr30</p>
            <p>.pb5</p>
            <p>.pb10</p>
          </div>

          <div className='grid-item-2'>
            <Heading type='h3' classNames={['bold underline thick']}>Margin</Heading>
            <p>.m5</p>
            <p>.m10</p>
            <p>.mb5</p>
            <p>.mb10</p>
            <p>.mb15</p>
            <p>.mb20</p>
            <p>.mt5</p>
            <p>.mt10</p>
            <p>.ml5</p>
            <p>.ml10</p>
            <p>.mr5</p>
            <p>.mr10</p>
          </div>

        </div>
      </div>
    </React.Fragment>
  )
}
