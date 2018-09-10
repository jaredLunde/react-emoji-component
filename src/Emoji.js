import React from 'react'
import PropTypes from 'prop-types'
import {toSprite, toImage} from './utils'


const defaultImgStyle = {
  contain: 'strict',
  display: 'inline-block',
  verticalAlign: 'middle',
  position: 'relative'
}

export default function Emoji ({
  emoji,
  codePoint,
  style,
  options,
  ...props
}) {
  return (
    options.useSprites === true
      ? <span
          role='img'
          alt={emoji}
          style={Object.assign(toSprite(codePoint, options), style)}
          {...props}
        />
      : <img
          width={options.size}
          height={options.size}
          alt={emoji}
          src={toImage(codePoint, options)}
          style={style ? Object.assign({}, defaultImgStyle, style) : defaultImgStyle}
          {...props}
        />
  )
}


if (__DEV__) {
  Emoji.propTypes = {
    emoji: PropTypes.string.isRequired,
    codePoint: PropTypes.string.isRequired,
    options: PropTypes.shape({
      size: PropTypes.number,
      publicPath: PropTypes.string,
      hiDPI: PropTypes.bool,
      extension: PropTypes.string,
      useSprites: PropTypes.bool
    }).isRequired
  }
}
