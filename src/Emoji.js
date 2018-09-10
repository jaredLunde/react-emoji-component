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
  size = 16,
  style,
  publicPath,
  hiDPI,
  extension,
  useSprites = false,
  ...props
}) {
  const opt = {
    size,
    style,
    publicPath,
    hiDPI,
    extension
  }

  return useSprites === true
    ? <span
        role='img'
        alt={emoji}
        style={toSprite(codePoint, opt)}
        {...props}
      />
    : <img
        width={size}
        height={size}
        alt={emoji}
        src={toImage(codePoint, opt)}
        style={style ? {...defaultImgStyle, ...style} : defaultImgStyle}
        {...props}
      />
}


if (__DEV__) {
  Emoji.propTypes = {
    emoji: PropTypes.string.isRequired,
    size: PropTypes.number,
    publicPath: PropTypes.string,
    hiDPI: PropTypes.bool,
    extension: PropTypes.string,
    useSprites: PropTypes.bool
  }
}
