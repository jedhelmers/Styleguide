import React from 'react'
import { Link } from 'react-router-dom'
import { Router } from 'react-router'
import { Icon } from '../../lib/atoms/Icon'
import { Heading } from '../../lib/atoms/Heading'
import { Field } from '../../lib/atoms/Field'
import { getMenuItems } from '../../utils/menu'
import { toTitleCase, generateUID } from '../../utils/helpers'

let getMenu = getMenuItems()
let selectedPage = null
let mobileOpen = true

const Element = (props) => {
  let {
    type,
    className = [],
    actions = '',
    children
  } = props

  return React.createElement(
    type,
    {
      className: className,
      onClick: actions
    },
    ...children
  )
}

getMenu = Object.values(getMenu).map(
  item => Object.keys(item)
    .map(key => ({open: true, section: key, options: Object.values(item[key]).map(i => ({...i, selected: false}))})
  )
)

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
    console.log(getMenu)

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
    {/* TODO: finsish up UI selection stuff */}
    this.linkSelectionHandler(index, i)
    selectedPage = {index: index, i: i}
    this.forceUpdate()
  }

  openMobileMenu(){
    mobileOpen = !mobileOpen
    this.forceUpdate()
  }

  render() {
    let { menu } = this.state
    console.log()

    return (
      <React.Fragment>
      <div className='navMobile flex-spacebetween p20'>
        <Icon icon='arrow_back' classNames={['clickable', 'White']} size={'lg'}/>
        <Icon icon='bars' classNames={['clickable', 'White']} size={'lg'} onClick={() => this.openMobileMenu()}/>
      </div>
      {
        mobileOpen && (
          <div className='nav scrollable pt10'>
            <Field
              name='search'
              classNames={['mr10', 'ml10']}
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
                <Heading type='h3' classNames={['uppercase Whitesecondary']} key={''} index={index}>
                  <div className='flex-spacebetween' onClick={() => this.actionHandler(index)}>
                    {toTitleCase(item[0].section)}
                    <Icon icon={[item[0].open ? 'angle-down' : 'angle-right']} classNames={['clickable', 'White', 'pr5' ]} size={'sl'}/>
                  </div>
                </Heading>
                {item[0].open && item[0].options.map((i, j) => (
                  <li className={['clickable Whitesecondary nav-link', i.selected && 'selected'].join(' ')} key={generateUID()}>
                    <Link className={['White'].join(' ')} to={i.link} onClick={() => this.boolHandler(index, j)}>
                      {`${i.title}`}
                    </Link>
                  </li>
                ))}
              </ul>

              </React.Fragment>
            ))
            }
            <div className={['White flex-start-h', 'p20 clickable'].join(' ')} style={{ borderTop: '1px solid var(--win-chroma-3)' }}>
              <Icon icon='sign-out' classNames={['White' ]} size={'sl'}/>
              <label className={['White pl10 clickable']}>Logout</label>
            </div>
          </div>
        )
      }

      </React.Fragment>
    )
  }
}
