import React from 'react';
import { Heading } from '../../atoms/Heading'
import { Header } from '../components/Header'
import { Icon } from '../../atoms/Icon'
import { Markup } from '../../../utils/helpers'
import Prism from "prismjs"

export default class MediaQueries extends React.Component {
  componentDidMount(){
    Prism.highlightAll();
  }

  render(){
    return (
      <React.Fragment>

        <Header title='Media Queries'/>
        <div className='p20'>
            <Heading type='h1' classNames={['mb20']}>Media Quaries</Heading>

            <div className='border rounded background-white p10 flex-reverse-v'>
              <div id='active1' className='flex-start-h'>
                <div style={{ width: 80, height: 34 }} className='box-size border background-chroma-2 mr10 flex-center-v'><label></label></div>
                <label>max-width: 375px</label>
              </div>

              <div id='active2' className='flex-start-h pb10'>
                <div style={{ width: 80, height: 34 }} className='box-size border background-chroma-2 mr10 flex-center-v'><label></label></div>
                <label>max-width: 480px</label>
              </div>

              <div id='active3' className='flex-start-h pb10'>
                <div style={{ width: 80, height: 34 }} className='box-size border background-chroma-2 mr10 flex-center-v'><label></label></div>
                <label>max-width: 768px</label>
              </div>

              <div id='active4' className='flex-start-h pb10'>
                <div style={{ width: 80, height: 34 }} className='box-size border background-chroma-2 mr10 flex-center-v'><label></label></div>
                <label>max-width: 1024px</label>
              </div>

              <div id='active5' className='flex-start-h pb10'>
                <div style={{ width: 80, height: 34 }} className='box-size border background-chroma-2 mr10 flex-center-v'><label></label></div>
                <label>max-width: 1280px</label>
              </div>

              <div id='active6' className='flex-start-h pb10'>
                <div style={{ width: 80, height: 34 }} className='box-size border background-chroma-2 mr10 flex-center-v'><label></label></div>
                <label>max-width: 1600px</label>
              </div>
            </div>

        </div>
      </React.Fragment>
    )
  }
}
