import React from 'react';
import { Link } from 'react-router-dom'
import { Heading } from '../../lib'
import { Header } from './components/Header'

export default function Typography() {
  return (
    <React.Fragment>
      <Header title='Winsupply Pattern Library'/>

      <div className='p20'>


        <Heading type='h2' classNames={['underline thick']}>Our digital brand on the web</Heading>

        <div className='grid-3 grid-col-gap-20'>
          <div className='grid-item-1'>
            <p>
              This pattern library holds the building blocks for building Winsupply webapps. Currently we're utilizing an Angular framework, but hopefully this might help us to migrate to React.
              Centralizing these React components and CSS utilities helps us forge a consistent user experience that is always up to date with our latest brand guidelines.
            </p>
          </div>
        </div>

        <Heading type='h2' classNames={['underline thick']}>Components & Usage</Heading>

        <div className='grid-3 grid-col-gap-20'>
          <code className='grid-item-1'>
            Explore each of the many components used to build our app, along with the design principles we use to construct them.
          </code>
          <div className='grid-item-2'>
            <Heading type='h4' classNames={['underline thin uppercase']}>Guidelines</Heading>
            <p>
              These visual guidelines form a harmonious visual system where we can not only be modular but extremely thoughtful as to how we use each component.
            </p>
            <li><Link to='/guidelines/typography'>Typography</Link></li>
            <li><Link to='/guidelines/color'>Color</Link></li>
            <li><Link to='/guidelines/spacing'>Spacing</Link></li>
            <li><Link to='/guidelines/mediaqueries'>Media Queries</Link></li>

          </div>

          <div className='grid-item-3'>
            <Heading type='h4' classNames={['underline thin uppercase']}>Components</Heading>
            <p>
              Each of these React components comes with its own set of properties and modifications.
            </p>
            <li><Link to='/components/headings'>Headings</Link></li>
            <li><Link to='/components/icons'>Icons</Link></li>
            <li><Link to='/components/buttons'>Buttons</Link></li>
            <li><Link to='/components/forms'>Forms</Link></li>
            <li><Link to='/components/'>Content Layout</Link></li>
            <li><Link to='/components/'>Page Layout</Link></li>
            <li><Link to='/components/layoututilities'>Layout Utilities</Link></li>
            <li><Link to='/components/'>Navigation</Link></li>
            <li><Link to='/components/'>ThemeContext</Link></li>
            <li><Link to='/components/'>Misc.</Link></li>
          </div>
        </div>

        <Heading type='h2' classNames={['underline thick']}>Utilities</Heading>

        <div className='grid-3 grid-col-gap-20'>
          <code className='grid-item-1'>
            Beyond the components themselves, we use a variety of CSS and JS utilities. These enable us to position, space, or otherwise visually present the components in the way they’re intended to within a given flow or layout.
          </code>
          <div className='grid-item-2'>
            <Heading type='h4' classNames={['underline thin uppercase']}>Style Utilities</Heading>
            <p>
              Presentational CSS utility classes to handle common styling requirements. The glue holding components together.
            </p>
            <li><Link to=''>Align</Link></li>
            <li><Link to=''>Flexbox</Link></li>
            <li><Link to=''>Grid and Sizing</Link></li>
            <li><Link to=''>Position</Link></li>
            <li><Link to=''>Spacing</Link></li>
            <li><Link to=''>Text</Link></li>
            <li><Link to=''>Visibility</Link></li>
            <li><Link to=''>Styles Index</Link></li>
          </div>

          <div className='grid-item-3'>
            <Heading type='h4' classNames={['underline thin uppercase']}>Helpers</Heading>
            <p>
              JavaScript helper modules providing commonly used functionality.
            </p>
          </div>
        </div>

      </div>

    </React.Fragment>
  )
}
