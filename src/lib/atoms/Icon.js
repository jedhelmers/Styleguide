import React from 'react'

export const Icon = (props) => {
  let {
    icon,
    focusable,
    classNames,
    size,
    styles = [],
    onClick,
    name = ''
  } = props

  return React.createElement(
    'i',
    {
      className: [`fa fa-${icon} ${classNames.join(' ')} ${typeof size === 'string' && `icon-${size}`}`],
      onClick: onClick,
      style: typeof size === 'number' ? { fontSize: size } : {}
    },
  )
}
/*
icon sizes:
'xxlg', 'xlg', 'lg', 'md', 'sl', 'xsl', 'xxsl'

You can also pump in a raw number for font size
*/
