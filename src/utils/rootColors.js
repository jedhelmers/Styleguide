let rootColors = [
  {
    title: 'White',
    variable: '--white',
    value: 'rgba(255, 255, 255, 1)',
    type: 'canonical'
  },
  {
    title: 'Secondary White',
    variable: '--white-secondary',
    value: 'rgba(255, 255, 255, .78)',
    type: 'canonical'
  },
  {
    title: 'Help White',
    variable: '--white-help',
    value: 'rgba(255, 255, 255, .6)',
    type: 'canonical'
  },
  {
    title: 'Chroma 1',
    variable: '--win-chroma-1',
    value: '#F5F5F5',
    type: 'gray'
  },
  {
    title: 'Chroma 2',
    variable: '--win-chroma-2',
    value: '#eeeeee',
    type: 'gray'
  },
  {
    title: 'Chroma 3',
    variable: '--win-chroma-3',
    value: '#CCCCCC',
    type: 'gray'
  },
  {
    title: 'Chroma 4',
    variable: '--win-chroma-4',
    value: '#999999',
    type: 'gray'
  },
  {
    title: 'Chroma 5',
    variable: '--win-chroma-5',
    value: '#515151',
    type: 'gray'
  },
  {
    title: 'Chroma 6',
    variable: '--win-chroma-6',
    value: '#444444',
    type: 'gray'
  },
  {
    title: 'Chroma 7',
    variable: '--win-chroma-7',
    value: 'rgba(40, 44, 52, 1)',
    type: 'gray'
  },
  {
    title: 'Wildcard Chroma',
    variable: '--win-chroma-x',
    value: '#eaeaea',
    type: 'gray'
  },
  {
    title: 'Primary Text',
    variable: '--win-primary-text',
    value: 'rgba(0, 0, 0, .78)',
    type: 'text'
  },
  {
    title: 'Secondary Text',
    variable: '--win-secondary-text',
    value: 'rgba(0, 0, 0, .6)',
    type: 'text'
  },
  {
    title: 'Help',
    variable: '--win-help',
    value: 'rgba(0, 0, 0, .35)',
    type: 'text'
  },
  {
    title: 'Black',
    variable: '--black',
    value: '#000000',
    type: 'canonical'
  },
  {
    title: 'Hover',
    variable: '--win-hover',
    value: 'rgba(0, 114, 207, .1)',
    type: 'functional'
  },
  {
    title: 'Selected',
    variable: '--win-select',
    value: '#cfe9ff',
    type: 'functional'
  },
  {
    title: 'Selected: Odd',
    variable: '--win-select-odd',
    value: '#c4ddf2',
    type: 'functional'
  },
  {
    title: 'Winblue',
    variable: '--win-primary',
    value: '#0072cf',
    type: 'canonical'
  },
  {
    title: 'Winblue Dark',
    variable: '--win-primary-dark',
    value: '#004882',
    type: 'functional'
  },
  {
    title: 'Winblue Darker',
    variable: '--win-primary-darker',
    value: '#003a69',
    type: 'functional'
  },
  {
    title: 'Tertiary',
    variable: '--win-tertiary',
    value: '#739849',
    type: 'canonical'
  },
  {
    title: 'Success',
    variable: '--win-success',
    value: '#668741',
    type: 'canonical'
  },
  {
    title: 'Success Secondary',
    variable: '--win-success-secondary',
    value: '#009933',
    type: 'canonical'
  },
  {
    title: 'Success Secondary Dark',
    variable: '--win-success-secondary-dark',
    value: '#007025',
    type: 'functional'
  },
  {
    title: 'Alert',
    variable: '--win-alert',
    value: '#d8c726',
    type: 'functional'
  },
  {
    title: 'Alert Dark',
    variable: '--win-alert-dark',
    value: '#978b1b',
    type: 'functional'
  },
  {
    title: 'Warning',
    variable: '--win-warning',
    value: '#e28f3e',
    type: 'canonical'
  },
  {
    title: 'Warning Dark',
    variable: '--win-warning-dark',
    value: '#ce751f',
    type: 'functional'
  },
  {
    title: 'Error',
    variable: '--win-error',
    value: '#cc0000',
    type: 'canonical'
  },
  {
    title: 'Error Dark',
    variable: '--win-error-dark',
    value: '#800000',
    type: 'functional'
  },
  {
    title: 'Error Darker',
    variable: '--win-error-darker',
    value: '#660000',
    type: 'functional'
  }
]

export function getRootColors(){
  return rootColors
}
