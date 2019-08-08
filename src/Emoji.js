import React from 'react'
import isChrome from './utils/isChrome'
import toImage from './utils/toImage'


const defaultImgStyle = {
  contain: 'strict',
  verticalAlign: 'text-bottom',
  imageRendering: isChrome === true ? '-webkit-optimize-contrast' : 'crisp-edges'
}

export default function Emoji ({emoji, codePoint, style, options, ...props}) {
  props.width = options.size
  props.height = options.size
  props.style = style === void 0 ? defaultImgStyle : Object.assign({}, defaultImgStyle, style)
  props.src = toImage(codePoint, options)
  props.alt = emoji
  return React.createElement('img', props)
}


if (__DEV__) {
  const PropTypes = require('prop-types')
  Emoji.propTypes = {
    emoji: PropTypes.string.isRequired,
    codePoint: PropTypes.string.isRequired,
    style: PropTypes.object,
    options: PropTypes.shape({
      size: PropTypes.number,
      hiDpi: PropTypes.bool,
      publicPath: PropTypes.string,
      extension: PropTypes.string
    }).isRequired
  }
}
