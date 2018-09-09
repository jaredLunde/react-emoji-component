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
  data,
  size = 16,
  style,
  publicPath,
  hiDPI,
  extension,
  useSprites = false,
  ...props
}) {
  const opt = {
    data,
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
        style={toSprite(emoji, opt)}
        {...props}
      />
    : <img
        width={size}
        height={size}
        alt={emoji}
        src={toImage(emoji, opt)}
        style={style ? {...defaultImgStyle, ...style} : defaultImgStyle}
        {...props}
      />
}


if (__DEV__) {
  Emoji.propTypes = {
    emoji: PropTypes.string.isRequired,
    data: PropTypes.shape({
      emojis: PropTypes.object,
      categories: PropTypes.arrayOf(PropTypes.string),
      spriteSizes: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
    }).isRequired,
    size: PropTypes.number,
    publicPath: PropTypes.string,
    hiDPI: PropTypes.bool,
    extension: PropTypes.string,
    useSprites: PropTypes.bool
  }
}
