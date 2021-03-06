import React from 'react';
import { Heading } from '../../../lib'
import { Header } from '../components/Header'
export default function Typography() {
  return (
    <React.Fragment>
      <Header title='Winsupply Pattern Library'/>

      <div className="background-primary" style={{ height: 300 }}>
        <div className='text-stroke-white' style={{ color: 'transparent', position: 'relative', top: 75, left: 20, fontSize: 172 }}>Aa</div>
        <div style={{ position: 'relative', top: -99, height: 123, borderTop: '1px solid var(--white-help)', borderBottom: '1px solid var(--white-help)' }}></div>
        <div style={{ position: 'relative', top: -206, height: 66, borderTop: '1px dashed var(--white-help)', borderBottom: '1px dashed var(--white-help)' }}></div>
        <div style={{ position: 'relative', top: -220, height: 123, borderTop: '1px solid var(--white-help)'}}></div>
      <div class="type-intro-letters"></div><div class="type-intro-lines"></div></div>

      <div className='p20'>
        <div className='grid-3 grid-col-gap-20 mb20'>
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
              <p>License	| Apache License 2.0</p>
              <a target='_blank' href='https://en.wikipedia.org/wiki/Open_Sans'>Open Sans</a>
            </p>
          </div>
        </div>

        {/* COLORS */}
        <Heading type='h2' classNames={['underline thin']}>Text & Utility</Heading>
        <p>
          Sometimes we need to change the color or format (bold, italic, etc) of certain pieces of text or icons outside of their normal colors. Using the following utility classes will allow you to define colors as needed. The class <strong className='Error'>.Error</strong> is probably the most common use of this, while the others are used sparingly.
        </p>
        <div className='grid-3 grid-col-gap-20 grid-row-gap-20 mb20'>
          <div className=''>
            <Heading type='h3' classNames={['Winblue underline thin uppercase']}>Primary Text</Heading>
            <p>
              <p><strong>Primary Color Text</strong></p>
              Uses the class <strong>.Winblue</strong>. Uses the color <strong className='Winblue'>#0072cf</strong>.
            </p>
          </div>
          <div className=''>
            <Heading type='h3' classNames={['Error underline thin uppercase']}>Error</Heading>
            <p>
              <p><strong>Error Text</strong></p>
              Uses the class <strong>.Error</strong>. Uses the color <strong className='Error'>#cc0000</strong>.
            </p>
          </div>
          <div className=''>
            <Heading type='h3' classNames={['Alert underline thin uppercase']}>Alert</Heading>
            <p>
              <p><strong>Alert Text</strong></p>
              Uses the class <strong>.Alert</strong>. Uses the color <strong className='Alert'>#d8c726</strong>.
            </p>
          </div>
          <div className=''>
            <Heading type='h3' classNames={['Warning underline thin uppercase']}>Warning Text</Heading>
            <p>
              <p><strong>Warning Color Text</strong></p>
              Uses the class <strong>.Warning</strong>. Uses the color <strong className='Warning'>#e28f3e</strong>.
            </p>
          </div>
          <div className=''>
            <Heading type='h3' classNames={['Success underline thin uppercase']}>Success</Heading>
            <p>
              <p><strong>Success Text</strong></p>
              Uses the class <strong>.Success</strong>. Uses the color <strong className='Success'>#668741</strong>.
            </p>
          </div>
          <div className=''>
            <Heading type='h3' classNames={['Primary underline thin uppercase']}>Primary</Heading>
            <p>
              <p><strong>Primary Text</strong></p>
              Uses the class <strong>.Primary</strong>. Uses the color <strong className='Primary'>rgba(0, 0, 0, .78)</strong>.
            </p>
          </div>
          <div className=''>
            <Heading type='h3' classNames={['Help underline thin uppercase']}>Help</Heading>
            <p>
              <p><strong>Help Text</strong></p>
              Uses the class <strong>.Help</strong>. Uses the color <strong className='Help'>rgba(0, 0, 0, .35)</strong>.
            </p>
          </div>
        </div>

        {/* EXAMPLES */}
        <Heading type='h1' classNames={['underline thick uppercase']}>Emphasis</Heading>
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


        <Heading type='h1' classNames={[]}><div style={{ width: 200 }}>Font Utilities</div></Heading>
        <div className='grid-2 grid-col-gap-20'>
          <div className='grid-item-1 f12'>
            <Heading type='h2' classNames={['underline thin mb20']}>Font Alignment</Heading>
            <li className='bold'>.text-left</li>
            <li className='bold'>.text-center</li>
            <li className='bold'>.text-right</li>
          </div>
          <div className='grid-item-2 f12'>
            <Heading type='h2' classNames={['underline thin mb20']}>Font Sizes</Heading>
            <li className='bold'>.f10</li>
            <li className='bold'>.f12</li>
            <li className='bold'>.f14</li>
            <li className='bold'>.f116</li>
            <li className='bold'>.f18</li>
            <li className='bold'>.f20</li>
            <li className='bold'>.f24</li>
          </div>
        </div>

        <Heading type='h1' classNames={['']}><div style={{ width: 200 }}>Scaling</div></Heading>

        <Heading type='h3' classNames={['Winblue underline uppercase thin']}><div style={{ width: 200 }}>Standard</div></Heading>
        <Heading type='h1' classNames={[]}>The Five Boxing Wizards Jump Quickly. 1234567890</Heading>
        <Heading type='h2' classNames={[]}>The Five Boxing Wizards Jump Quickly. 1234567890</Heading>
        <Heading type='h3' classNames={[]}>The Five Boxing Wizards Jump Quickly. 1234567890</Heading>
        <Heading type='h4' classNames={['mb20']}>The Five Boxing Wizards Jump Quickly. 1234567890</Heading>

        <Heading type='h3' classNames={['Winblue underline uppercase thin']}><div style={{ width: 200 }}>Uppercase</div></Heading>
        <Heading type='h1' classNames={['uppercase']}>The Five Boxing Wizards Jump Quickly. 1234567890</Heading>
        <Heading type='h2' classNames={['uppercase']}>The Five Boxing Wizards Jump Quickly. 1234567890</Heading>
        <Heading type='h3' classNames={['uppercase']}>The Five Boxing Wizards Jump Quickly. 1234567890</Heading>
        <Heading type='h4' classNames={['uppercase', 'mb20']}>The Five Boxing Wizards Jump Quickly. 1234567890</Heading>

        <Heading type='h3' classNames={['Winblue underline uppercase thin']}><div style={{ width: 200 }}>Underlines</div></Heading>
        <Heading type='h1' classNames={['underline', 'thin']}>The Five Boxing Wizards Jump Quickly. 1234567890</Heading>
        <Heading type='h2' classNames={['underline', 'thin']}>The Five Boxing Wizards Jump Quickly. 1234567890</Heading>
        <Heading type='h3' classNames={['underline', 'thin']}>The Five Boxing Wizards Jump Quickly. 1234567890</Heading>
        <Heading type='h4' classNames={['underline', 'thin', 'mb20']}>The Five Boxing Wizards Jump Quickly. 1234567890</Heading>
      </div>
    </React.Fragment>
  )
}
