import React from 'react'
// import styles from 'https://s3.amazonaws.com/wincdn/css/winsupply-icon-library.css'

export const Icon = props => {
  let {
    icon,
    focusable,
    classNames,
    size,
    styles = []
  } = props

  return (
    <i
      className={[
        'fa',
        `fa-${icon}`,
        classNames.join(' '),
        typeof size === 'string' && `icon-${size}`
      ].join(' ')}

      style={typeof size === 'number' ? { fontSize: size } : {}, styles}
    />
  )
}

/*
icon sizes:

xxlg
xlg
lg
md
sl
xsl
xxsl

You can also pump in a raw number for font size
*/
