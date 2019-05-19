import React from 'react';
import { Heading } from '../../atoms/Heading'
import { Header } from '../components/Header'
export default function Typography() {
  return (
    <React.Fragment>
      <Header title='Winsupply Pattern Library'/>

      <div className='p20'>
        <div className='grid-3 grid-col-gap-20 mb20 underline thicker'>
          <div className='grid-item-1'>
            <Heading type='h2' classNames={['underline thin']}>Typeface</Heading>
            <p>
              Open Sans is a humanist sans serif typeface designed by Steve Matteson, Type Director of Ascender Corp.

              This free typeface was designed with an upright stress, open forms and a neutral, yet friendly appearance. It was optimized for print, web, and mobile interfaces, and is incredibly legible.
            </p>
          </div>
          <div className='grid-item-2'>
            <Heading type='h2' classNames={['underline thin']}>Weights</Heading>
            <p>
              While Open Sans has a variety of weights, we only use '700' and '400'. Standard, non-emphasised text is 400; whereas, 700 is our bold weight. To use, simply add the <strong>.bold</strong> class to your component
            </p>
          </div>
          <div className='grid-item-3'>
            <Heading type='h2' classNames={['underline thin']}>Further Reading</Heading>
            <p>
              Gotham @ Hoefler & Co.
              Fonts In Use: Gotham
              Know Your Type: Gotham
            </p>
          </div>
        </div>

        <div className='grid-3 grid-col-gap-20'>
          <div className='grid-item-1'>
            <Heading type='h3' classNames={[]}><div style={{ width: 200 }}>Specimen</div></Heading>

          </div>
          <div className='grid-item-2'>
            <Heading type='h1' classNames={['bold', 'mb20']}>
              Big things are often important; hence their bigness.
            </Heading>
            <Heading type='h2' classNames={['pb10']}>
              However, sometimes things don’t need to be so big.
            </Heading>
            <p>
              If you're going to go into a superfluous exposition about a typeface that's entirely ubiquitous, you can use a style more appropriate and smaller style.

              Every designer has admired the no-nonsense lettering of the American vernacular, those letters of paint, plaster, neon, glass and steel that figure so prominently in the urban landscape. From these humble beginnings comes Gotham, a hard-working typeface for the ages. Gotham celebrates the attractive and unassuming lettering of the city. New York is teeming with such letters, handmade sans serifs that share a common underlying structure, an engineer’s idea of “basic lettering” that transcends both the characteristics of their materials and the mannerisms of their makers.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
