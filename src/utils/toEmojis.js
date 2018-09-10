import React from 'react'
import GraphemeSplitter from 'grapheme-splitter'
import emojiToCodePoints from './emojiToCodePoints'
import Emoji from '../Emoji'
import {emojis} from '../data'
import split from './split'


export default function toEmojis (string, {render = Emoji, ...props}) {
  const converted = []
  let strings = []
  const chars = split(string)

  for (let i = 0; i < chars.length; i++) {
    const char = chars[i]
    const codePoint = emojiToCodePoints(char)
    let emoji = emojis[codePoint]

    if (emoji !== void 0) {
      if (strings.length > 0) {
        converted.push(strings.join(''))
        strings = []
      }

      // can safely mutate here
      props.emoji = char
      props.codePoint = codePoint
      props.key = `${char}-${i}`
      // renders the emoji in React component
      converted.push(React.createElement(render, props))
    }
    else {
      strings.push(char)
    }
  }

  if (strings.length > 0) {
    converted.push(strings.join(''))
  }

  return converted
}
