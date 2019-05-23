import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Heading } from './components/atoms/Heading'
import PatternLibrary from './components/pages/PatternLibrary'
import Navigation from './components/molecules/Navigation'
import Typography from './components/pages/guidelines/Typography'
import Color from './components/pages/guidelines/Color'
import MediaQueries from './components/pages/guidelines/MediaQueries'
import Guidelines from './components/pages/guidelines/Guidelines'
import Spacing from './components/pages/guidelines/Spacing'
import Flexbox from './components/pages/styleutilities/Flexbox'
import Headings from './components/pages/components/Headings'
import Icons from './components/pages/components/Icons'
import Buttons from './components/pages/components/Buttons'
import Forms from './components/pages/components/Forms'
import LayoutUtilities from './components/pages/components/LayoutUtilities'
import ContentLayout from './components/pages/components/ContentLayout'
import PageLayout from './components/pages/components/PageLayout'
import { Icon } from './components/atoms/Icon'
import './App.css';
import './stylesheets/root.css'

function App() {
  return (
    <div className="styleguide">
      <Navigation/>
      <div className='body'>
      <Route exact path='/guidelines' render={() => (
        <Guidelines/>
      )}/>
      <Route path='/guidelines/typography' render={() => (
        <Typography/>
      )}/>
      <Route path='/guidelines/color' render={() => (
        <Color/>
      )}/>
      <Route path='/guidelines/spacing' render={() => (
        <Spacing/>
      )}/>
      <Route path='/guidelines/mediaqueries' render={() => (
        <MediaQueries/>
      )}/>
      <Route path='/pattern-library' render={() => (
        <PatternLibrary/>
      )}/>

      <Route path='/components/headings' render={() => (
        <Headings/>
      )}/>
      <Route path='/components/icons' render={() => (
        <Icons/>
      )}/>
      <Route path='/components/buttons' render={() => (
        <Buttons/>
      )}/>
      <Route path='/components/forms' render={() => (
        <Forms/>
      )}/>
      <Route path='/components/contentlayout' render={() => (
        <ContentLayout/>
      )}/>
      <Route path='/components/pagelayout' render={() => (
        <PageLayout/>
      )}/>
      <Route path='/components/layoututilities' render={() => (
        <LayoutUtilities/>
      )}/>

      <Route path='/styleutilities/flexbox' render={() => (
        <Flexbox/>
      )}/>

      </div>
    </div>
  )
}

export default App;
