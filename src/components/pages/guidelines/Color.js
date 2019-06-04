import React from 'react';
import { Heading } from '../../../lib'
import { Field } from '../../../lib'
import { Header } from '../components/Header'
import { getColors } from '../../../utils/accessibilitycolors'
import { hexToRgb } from '../../../utils/helpers'
import { getRootColors } from '../../../utils/rootColors'

function swatch(r){
  return (
    <div className='flex-spacebetween'>
      <div
        className='flex-center-v'
        style={{
          backgroundColor: `var(${r.variable})`,
          borderRadius: '50%',
          width: 60,
          height: 60,
          textAlign: 'center',
          border: '15px solid #e5e5e5',
          boxShadow: '0 0 1px 0 var(--win-chroma-7)'
        }}
      >
      </div>
      <div className='text-left pl10' style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
        <Heading type='h2' classNames={[]}>{r.title}</Heading>
        <code>{r.variable}</code>
        <br/>
        <code>{r.value}</code>
      </div>
    </div>
  )
}

function colorCard(color, index){
  return (
    <div style={{
    height: 140,
    marginBottom: 10,
    backgroundColor: `var(--${color.bcssVariable})`,
    color: `var(--${color.fcssVariable})`,
    border: `2px solid var(--${color.fcssVariable})`,
    fontSize: 10,
    borderRadius: 4,
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
  }} key={index}>
    <div className='flex-end-h'>
      <div style={{
          backgroundColor: `var(--${color.fcssVariable})`,
          color: `var(--${color.bcssVariable})`,
          borderRadius: 50,
          fontSize: 8,
          width: 25,
          minHeight: 25,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          fontWeight: 700,
        }}>{color.ratio}</div>
    </div>

    {color.AAA === 'pass' ? (
        <h1 style={{ color: `var(--${color.fcssVariable})` }}>AAA: <strong>PASS</strong></h1>
      ) : (
        color.AA === 'pass' ? (
          <h1 style={{ color: `var(--${color.fcssVariable})` }}>AA Large: <strong>PASS</strong></h1>
        ) : (
          color.AAALarge === 'pass' ? (
            <h1 style={{ color: `var(--${color.fcssVariable})` }}>AAA Large: <strong>PASS</strong></h1>
          ) : (
            color.AALarge === 'pass' ? (
              <h1 style={{ color: `var(--${color.fcssVariable})` }}>AA Large: <strong>PASS</strong></h1>
            ) : (
              <h1 style={{ color: `var(--${color.fcssVariable})` }}><strong>FAIL</strong></h1>
            )
           )
         )
      )}

      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}><strong>FG: #{color.fcolor}</strong>  {color.fcssVariable}</div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}><strong>BG: #{color.bcolor}</strong>  {color.bcssVariable}</div>
      </div>

</div>)
}

export default class Color extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      colors: [],
      fsearch: '',
      bsearch: '',
      asearch: '',
      fcssv: '',
      bcssv: '',
      acssv: '',
      value: 3,
      fail: false,
      root: []
    }

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  componentDidMount(){
    let colors = getColors()
    let root = getRootColors()
    this.setState({
      colors: colors,
      root: root
    })
  }

  render(){
    let { colors, root } = this.state

    // console.log('COLORS', root)
    return (
      <React.Fragment>

        <Header title='Colors' classNames={[]}/>
        <div className='p20'>
            <Heading type='h1' classNames={['mb20']}>Brand Colors</Heading>

            <div className='grid-3 grid-row-gap-20 mb20'>
              {root.filter(f => f.type === 'canonical').map(r => (
                swatch(r)
              ))}
            </div>

            <Heading type='h1' classNames={['mb20']}>Grays</Heading>

            <div className='grid-3 grid-row-gap-20 mb20'>
              {root.filter(f => f.type === 'gray').map(r => (
                swatch(r)
              ))}
            </div>

            <Heading type='h1' classNames={['mb20']}>Functional Colors</Heading>

            <div className='grid-3 grid-row-gap-20 mb20'>
              {root.filter(f => f.type === 'functional').map(r => (
                swatch(r)
              ))}
            </div>

            <Heading type='h2' classNames={['bold', 'underline', 'thick']}>Text Colors</Heading>
            <p className='mb20'>
              There are four basic text colors which are intended to cover a large majority of text needs.

              For dark text on a light background, we use either 'black' or 'soft black':
            </p>


            <Heading type='h2' classNames={['bold', 'underline', 'thick']}>Accessible Combinations</Heading>
            <p className='mb20'>
              This is a list of color combinations of our color palette that pass WCAG 2.0 color contrast guidelines. Combinations displayed here pass either the AAA, AA, or AA Large WCAG conformance levels for contrast. AAA and AA combinations are safe to use at any type size. AA Large combinations are safe to use for large text.
              <br/><br/>
              For more details on appropriate color contrast, see the <a target="_blank" href='https://www.w3.org/TR/WCAG20/#visual-audio-contrast'>WCAG description</a>.
            </p>
            {/* Search Filters */}

            <Heading type='h3' classNames={['Winblue', 'underline', 'thin', 'uppercase']}>Search</Heading>
            <form className='grid-3 grid-row-gap-10 mb20 grid-col-gap-10 mb20 grid-3-template-columns'>
              <Field
                name={'fsearch'}
                onChange={this.handleInputChange}
                type={'text'}
                value={this.state.fsearch}
              >
                Front Color
              </Field>

              <Field
                name={'bsearch'}
                onChange={this.handleInputChange}
                type={'text'}
                value={this.state.bsearch}
              >
                Back Ground Color
              </Field>

              <Field
                name={'asearch'}
                onChange={this.handleInputChange}
                type={'text'}
                value={this.state.asearch}
              >
                All Colors
              </Field>

              <Field
                name={'fcssv'}
                onChange={this.handleInputChange}
                type={'text'}
                value={this.state.fcssv}
              >
                Front Variable
              </Field>

              <Field
                name={'bcssv'}
                onChange={this.handleInputChange}
                type={'text'}
                value={this.state.bcssv}
              >
                Background Variable
              </Field>

              <Field
                name={'acssv'}
                onChange={this.handleInputChange}
                type={'text'}
                value={this.state.acssv}
              >
                All Variables
              </Field>

              <Field
                name={'value'}
                id="filter"
                onChange={this.handleInputChange}
                type={'text'}
                value={this.state.value}
              >
                Contrast Ratio
              </Field>

              <label className='flex-center'>Ratio Slider:
                <input
                   id="typeinp"
                   type="range"
                   name='value'
                   min="0" max="21"
                   value={this.state.value}
                   onChange={this.handleInputChange}
                   step=".1"
                 />
              </label>
            </form>


          <div className='grid-3 grid-col-gap-10' style={{ minHeight: 300 }}>
            {colors.filter(item1 => item1.ratio >= this.state.value)
                .filter(item2 => item2.fcolor.toUpperCase().includes(this.state.fsearch.toUpperCase()))
                .filter(item3 => item3.fcssVariable.includes(this.state.fcssv))
                .filter(item5 => item5.bcssVariable.includes(this.state.bcssv))
                  .filter(item4 => item4.bcolor.toUpperCase().includes(this.state.bsearch.toUpperCase()))
                    .filter(item6 => item6.fcolor.toUpperCase().includes(this.state.asearch.toUpperCase()) || item6.bcolor.toUpperCase().includes(this.state.asearch.toUpperCase()))
                    .filter(item3 => item3.fcssVariable.includes(this.state.acssv) || item3.bcssVariable.includes(this.state.acssv))
                    .sort((a, b) => a.ratio - b.ratio)
                    .sort((a, b) => hexToRgb(b, 'bcolor') - hexToRgb(a, 'bcolor'))
                    .map((color, index) => (

              colorCard(color, index)

            ))}

          </div>
        </div>
      </React.Fragment>
    )
  }
}
