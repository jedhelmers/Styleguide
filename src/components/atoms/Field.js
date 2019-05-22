import React from 'react'
import { Icon } from './Icon'
import { toTitleCase, FieldStatus } from '../../utils/helpers'

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

  actionHandler = (direction, func = []) => {
    console.log('FUNC: ', func)
    for(let i = 0; i < func.length; i++){
      func[i].call()
    }
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
      onChange = [],
      onBlur = [],
      onFocus = [],
      value,
      required = false,
      type = 'text',
      error = ''
    } = this.props

    let { focused, valueInternal } = this.state

    return (
      <React.Fragment>

      <div className={[focused !== 'idle' && 'thicker border-primary', 'flex-spacebetween mb10 field-wrapper', focused === 'in' && 'field-wrapper-focus', error && `field-wrapper-${error.toLowerCase()}`].join(' ')} style={{ height: 55 }}>
        <div className='flex-reverse-v' style={{ width: '100%' }}>
          <input
            type={type}
            name={name}
            value={valueInternal}
            className={[focused ? 'mt4' : ''].join(' ')}
            onChange={(e) => this.changeHandler(e)}
            onFocus={() => focused && this.actionHandler('in')}
            onBlur={() => this.actionHandler('out', onBlur)}
            autocomplete="off"
          />
          <label className={[valueInternal === '' ? focused : '']}>{children}</label>
        </div>
        {error !== '' && (
          <Icon icon='exclamation-triangle' classNames={[error]} size='md' styles={{ paddingTop: 10 }}/>

        )}
      </div>
      {error !== '' && (
        <FieldStatus error={error} name={name}/>
      )}
      </React.Fragment>
    )
  }
}

export const CheckBox = props => {
  return (
    <div className="react-live-preview">
      <label className="option option--checkbox">
        <input type="checkbox" className="option__input hiddenVisually"/>
          <span style={{ display: 'flex' }}>
            <div className={["input-checkbox border-success"].join(' ')} style={{ height: 20, width: 20 }}>
              <Icon icon='check2' classNames={[]} size='sl' styles={{ paddingTop: 10 }}/>
            </div>
            <div className="flex-spacebetween-v"><p className="ml5">CheckBox</p></div>
        </span>
      </label>
    </div>
  )
}
