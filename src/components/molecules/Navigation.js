import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../atoms/Icon'
import { Heading } from '../atoms/Heading'
import { Field } from '../atoms/Field'
import { getMenuItems } from '../../utils/menu'
import { toTitleCase, generateUID } from '../../utils/helpers'

let getMenu = getMenuItems()
let selectedPage = {index: '', i: ''}

getMenu = Object.values(getMenu).map(
  item => Object.keys(item)
    .map(key => ({open: true, section: key, options: Object.values(item[key]).map(i => ({...i, selected: false}))})
  )
)

// console.log(getMenu)

export default class Navigation extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      open: false,
      menu: {}
    }
  }

  componentDidMount(){
    let newMenu = getMenuItems()
    this.setState({
      menu: newMenu
    })
  }

  actionHandler(index){
    this.openHandler(index)
    this.forceUpdate()
  }

  openHandler(index){
    let val = !getMenu[index][0].open
    // console.log(val)
    return {
      ...getMenu,
      [index]: {
        ...getMenu[index][0].open = val
      }
    }
  }

  linkSelectionHandler(index, i){
    let val = !getMenu[index][0].options[i].selected
    return {
      ...getMenu,
      [index]: {
        ...getMenu[index][0].options,
        [i]: {
          ...getMenu[index][0].options[i].selected = val
        }
      }
    }
  }

  boolHandler(index, i){
    this.linkSelectionHandler(index, i)
    // this.linkSelectionHandler(selectedPage.index, selectedPage.i)
    selectedPage = {index: index, i: i}
    this.forceUpdate()
  }

  render() {
    let { menu } = this.state
    // console.log(getMenu, selectedPage)
    return (
      <React.Fragment>
      <div className='navMobile flex-spacebetween p20'>
        <Icon icon='arrow_back' classNames={['clickable', 'White']} size={'lg'}/>
        <Icon icon='bars' classNames={['clickable', 'White']} size={'lg'}/>
      </div>
      <div className='nav p20 scrollable'>
        <Field
          name='search'
          classNames={['']}
          onChange={''}
          dark={true}
        >
          <div className={['White flex-start-h']}>
            <Icon icon='search' classNames={['clickable', 'White', 'pr5' ]} size={'sl'}/>
            Search
          </div>
        </Field>
        {getMenu.map((item, index) => (
          <React.Fragment>
          <ul className={['clickable']} key={generateUID()}>
            <Heading type='h3' classNames={['uppercase Whitesecondary']} key={''} index={index}><span onClick={() => this.actionHandler(index)}>{toTitleCase(item[0].section)}</span></Heading>
            {item[0].open && item[0].options.map((i, j) => (
              <li className='clickable Whitesecondary' key={generateUID()}>
                <Link className={['nav-link', i.selected && 'disabled'].join(' ')} to={i.link} onClick={() => this.boolHandler(index, j)}>
                  {`${i.title}`}
                </Link>
              </li>
            ))}
          </ul>
          </React.Fragment>
        ))
        }
      </div>
      </React.Fragment>
    )
  }
}
