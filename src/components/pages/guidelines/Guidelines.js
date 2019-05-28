import React from 'react';
import { Heading } from '../../atoms/Heading'
import { Header } from '../components/Header'
import { Icon } from '../../atoms/Icon'
import { Markup } from '../../../utils/helpers'
import Prism from "prismjs"

export default class Guidelines extends React.Component {
  componentDidMount(){
    Prism.highlightAll();
  }

  render(){
    return (
      <React.Fragment>

        <Header title='Guidelines'/>
        <div className='p20'>
            <Heading type='h1' classNames={['mb20']}>Brand Colors</Heading>

        </div>
      </React.Fragment>
    )
  }
}
