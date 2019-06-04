import React from 'react';
import { Heading } from '../../../lib'
import { Header } from '../components/Header'

const flexClasses = [
  'flex-center-v',
  'flex-end-h',
  'flex-end-v',
  'flex-spacebetween',
  'flex-spacebetween-v',
  'flex-start-v',
  'flex-center-h',
  'flex-start-h',
  'flex-start-wrap-h'
]

export default function Flexbox() {
  return (
    <React.Fragment>
    <Header title='Flexbox' classNames={[]}/>
    <div className='p20'>
      <Heading type='h1' classNames={['underline thick']}>Introduction</Heading>
        <p>Our Flexbox presentational classes make common flex layouts easy without requiring additional CSS. To learn more about Flexbox, check out the following resources:</p>

        <div className='mb20'>
          <li style={{ listStyleType: 'square' }}><a href='https://css-tricks.com/snippets/css/a-guide-to-flexbox/' target='_blank'>A Complete Guide to Flexbox</a> - A thorough guide to every Flexbox property by CSS Tricks.</li>
          <li style={{ listStyleType: 'square' }}><a href='https://philipwalton.github.io/solved-by-flexbox/' target='_blank'>Solved by Flexbox</a> - A collection of common UI patterns built with Flexbox.</li>
          <li style={{ listStyleType: 'square' }}><a href='http://flexboxfroggy.com/' target='_blank'>Flexbox Froggy</a> - A game that teaches Flexbox by positioning a variety of colorful frogs on lily pads.</li>
        </div>
        <div className='border background-white p10'>
          {flexClasses.map(item => (
            <React.Fragment>
            <Heading type='h3' classNames={['bold']}>{item}</Heading>
            <div style={{ height: 80 }} className={[item, 'bold','border'].join(' ')}>
              <div style={{ width: '30%', height: '30%' }} className={['bold', 'background-chroma-5', 'm5'].join(' ')}></div>
              <div style={{ width: '30%', height: '30%' }} className={['bold', 'background-chroma-4', 'm5'].join(' ')}></div>
              <div style={{ width: '30%', height: '30%' }} className={['bold', 'background-chroma-3', 'm5'].join(' ')}></div>
            </div>
            </React.Fragment>
          ))}

        </div>
    </div>
    </React.Fragment>
  )
}
