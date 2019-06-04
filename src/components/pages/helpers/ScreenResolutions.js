import React from 'react'
import { Heading } from '../../atoms/Heading'
import { Icon } from '../../atoms/Icon'
import { ToolTip } from '../../atoms/Tooltip'
import { Header } from '../components/Header'
import { Markup, dbToCamelCase, camelCaseToDb, grabKeyFromObject, arryToObject } from '../../../utils/helpers'
import { testResults } from '../../../utils/colordata'
import { iconList } from '../../../utils/iconList'
import Prism from "prismjs"
import '../../../utils/markup.css'


// let x = testResults.map(item => grabKeyFromObject(item, 'window'))
// x = {...x}
// let y = testResults.map(item => item['system'])
// y = {...y}
let uniqueIds = testResults.map(item => item.id)
uniqueIds = uniqueIds.filter((item, index) => uniqueIds.indexOf(item) === index )

// let testResultsNew =

let newArry = testResults
let x = Object.values(Object.values(newArry.sort((a, b) => a.id - b.id).sort((a, b) => Number.parseInt(a.id, 10) - Number.parseInt(b.id, 10)).map(item => ( {[item.id]: item}))))
let filteredList = uniqueIds.map(item => x.find(f => f[item]))
let filteredListB = uniqueIds.map(item => ({[item]: Object.values(newArry.filter(f => f.id === item))}))


const Device = props => {

  let { width, height, system, browserwidth, browserheight } = props

  return (
    <div style={{ width: Number.parseInt(width, 10)/6, height: Number.parseInt(height, 10)/6 }} className={['box-size m10 border background-white rounded border']}>
      <div className='box-size tooltip pink border rounded border-black p5' style={{ opacity: .75, width: Number.parseInt(browserwidth, 10)/6, height: Number.parseInt(browserheight, 10)/6, position: '' }}>
        <ToolTip light={false}><label className={['tooltiptext']}>.{system}</label></ToolTip>
        <label className='f10'>S. W: {Number.parseInt(width, 10)}</label>
        <label className='f10'>S. H: {Number.parseInt(height, 10)}</label>
        <label className='f10'>Br. W: {Number.parseInt(browserwidth, 10)}</label>
        <label className='f10'>Br. H: {Number.parseInt(browserheight, 10)}</label>
        <p className='f10 truncate'>{system.substr(0, system.indexOf(')') + 1)}...</p>
      </div>
    </div>
  )
}

export default class ScreenResolutions extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      apple: true,
      chrome: true,
      safari: true,

    }
  }

  componentDidMount() {
    Prism.highlightAll()
    let str = 'BUTTS_MCGOO'

    // console.log(camelCaseToDb(dbToCamelCase(str)))
    // console.log(dbToCamelCase(str))
    // x = x.map(item => grabKeyFromObject(item, 'window'))
    // x = JSON.parse(x)
    // '_3e9cx0xcb'
    // Object.values(x).map(item => console.log('testResults', Object.keys(item)))
    // console.log('filteredListB', testResults)
    // console.log('testResults', filteredList)
    // console.log('filteredListB', (filteredListB))
    // filteredListB.map(item => Object.values(item).map(i => console.log(i[0].id)))
    // console.log('_g0sihvdwm', filteredListB)
  }

  render() {
    let { apple, safari, chrome } = this.state
    return (
      <React.Fragment>
      <Header title='Icons' classNames={[]}/>
      <div style={{ display: 'flex', flexWrap: 'wrap' }} className='p10'>
        {filteredList.filter(item => Object.values(item)[0].system.includes('iPhone') || Object.values(item)[0].system.includes('iPad') || Object.values(item)[0].system.includes('SAMSUNG') || Object.values(item)[0].system.includes(''))
          .sort((a, b) => Object.values(a)[0].screenHeight - Object.values(b)[0].screenHeight).map(item => <Device browserwidth={Object.values(item)[0].browserInnerWidth} browserheight={Object.values(item)[0].browserInnerHeight} width={Object.values(item)[0].screenWidth} height={Object.values(item)[0].screenHeight} system={Object.values(item)[0].system}/>)}
      </div>
      <div className='p20'>
        <Heading type='h1' classNames={['underline thick']}>Icons</Heading>
        <div style={{ display: 'flex', flexWrap: 'wrap' }} className={['mb20']}>

        </div>

      </div>
      </React.Fragment>
    )
  }
}
