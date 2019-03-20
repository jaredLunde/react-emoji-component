import React from 'react'
import Emoji from './Emoji'
import toSprite from './utils/toSprite'


const EmojiSprite = ({emoji, codePoint, style, options, ...props}) => {
  props.role = 'img'
  props['aria-label'] = emoji
  props.children = emoji
  props.style = Object.assign(toSprite(codePoint, options), style)
  return React.createElement('span', props)
}

if (__DEV__) {
  EmojiSprite.propTypes /* remove-proptypes*/ = Emoji.propTypes
}

export default EmojiSprite
