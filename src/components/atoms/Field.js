import React from 'react'
import { Icon } from './Icon'

export class Field extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      focused: 'idle',
      valueInternal: ''
    }

    this.actionHandler = this.actionHandler.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
  }

  actionHandler = (direction) => {
    this.setState({
      focused: direction
    })
  }

  changeHandler = (e) => {

    this.setState({
      valueInternal: e.target.value
    })
  }

  render(){
    let {
      name,
      children,
      onChange,
      onBlur,
      onFocus,
      value,
      required = false,
      type = 'text',
    } = this.props

    let { focused, valueInternal } = this.state

    return (
      <div className='flex-reverse-v mb10'>
        <input
          type={type}
          name={name}
          value={valueInternal}
          className={[focused ? 'mt4' : ''].join(' ')}
          onChange={(e) => this.changeHandler(e)}
          onFocus={() => focused && this.actionHandler('in')}
          onBlur={() => this.actionHandler('out')}
          autocomplete="off"
        />
        <label className={[valueInternal === '' ? focused : '']}>{children}</label>
      </div>
    )
  }
}
