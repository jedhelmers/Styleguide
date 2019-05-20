import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../atoms/Icon'
import { Heading } from '../atoms/Heading'
import { getMenuItems } from '../../utils/menu'
import { toTitleCase } from '../../utils/helpers'
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

  render() {
    let { menu } = this.state
    console.log(Object.keys(menu))
    return (
      <React.Fragment>
      <div className='navMobile flex-spacebetween p20'>
        <Icon icon='arrow_back' classNames={['clickable', 'White']} size={'lg'}/>
        <Icon icon='bars' classNames={['clickable', 'White']} size={'lg'}/>
      </div>
      <div className='nav p20'>
        {Object.keys(menu).map((key, index) => (
          <React.Fragment>
          <ul key={index}>
            <Heading type='h3' classNames={['uppercase Whitesecondary']} key={key}>{toTitleCase(key)}</Heading>
            {menu[key].map((k, i) => (
              <li className='clickable Whitesecondary' key={i}>
                <Link className='nav-link' to={k.link}>
                  {`${k.title}`}
                </Link>
              </li>
            ))}
          </ul>
          </React.Fragment>
        ))}
      </div>
      </React.Fragment>
    )
  }
}
