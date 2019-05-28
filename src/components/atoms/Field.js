import React, { Component } from 'react'
import { Icon } from './Icon'
import { Label } from './Label'
import { toTitleCase, FieldStatus } from '../../utils/helpers'


export class Field extends Component<{}> {
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
    // console.log('FUNC: ', func)
    for(let i = 0; i < func.length; i++){
      func[i].call()
    }
    this.setState({
      focused: direction
    })
  }

  changeHandler = (e) => {
    // this.props.onChange(e, this.props.name)
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
      classNames = [],
      value,
      required = false,
      type = 'text',
      error = '',
      dark = false
    } = this.props

    let { focused, valueInternal } = this.state

    return (
      <React.Fragment>

      <div className={[focused !== 'idle' && 'border-primary', 'flex-spacebetween mb10 field-wrapper', focused === 'in' && 'field-wrapper-focus', error && `field-wrapper-${error.toLowerCase()}`, classNames.join(' ')].join(' ')} style={{ height: 55 }}>
        <div className='flex-reverse-v' style={{ width: '100%' }}>
          <input
            type={type}
            name={name}
            value={valueInternal}
            style={dark ? { color: 'var(--white)'} : {}}
            className={[focused ? 'mt4' : ''].join(' ')}
            onChange={(e) => this.changeHandler(e)}
            onFocus={() => focused && this.actionHandler('in')}
            onBlur={() => this.actionHandler('out', onBlur)}
            autocomplete="off"
          />
          <Label className={[valueInternal === '' ? focused : ''].join(' ')}>{children}</Label>
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
  let { name, classNames, children, checked, actions } = props

  return React.createElement(
    'label',
    {
      className: [classNames].join(' '),
      onClick: actions
    },(
      <p name={name} className="input-checkbox"  onClick={(e) => props.onChange(e, name)}>{children}
        <input name={name} type="checkbox" checked={checked}/>
        <Icon name={name} icon={[checked && 'check2']} classNames={['checkmark']} size='sl'/>
      </p>
    )
  )
}
