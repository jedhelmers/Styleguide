import React from 'react'
import { Route } from 'react-router-dom'
import { Heading } from './components/atoms/Heading'
import Navigation from './components/molecules/Navigation'
import Typography from './components/pages/guidelines/Typography'
import Color from './components/pages/guidelines/Color'
import MediaQueries from './components/pages/guidelines/MediaQueries'
import Guidelines from './components/pages/guidelines/Guidelines'
import Spacing from './components/pages/guidelines/Spacing'
import PatternLibrary from './components/pages/PatternLibrary'
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
      </div>
    </div>
  )
}

export default App;
