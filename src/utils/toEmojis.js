import React from 'react'
import GraphemeSplitter from 'grapheme-splitter'
import emojiToCodePoints from './emojiToCodePoints'
import Emoji from '../Emoji'
import {emojis} from '../data'
import split from './split'


const skipRe = /[a-zA-Z0-9\s]/

export default function toEmojis (
  string, {
    render = Emoji,
    // options
    size = 16,
    publicPath,
    hiDPI,
    extension,
    useSprites = false,
    // everything else is normal props
    ...props
  }
) {
  const options = {size, publicPath, hiDPI, extension, useSprites}
  let strings = ''
  const converted = []
  const chars = split(string)

  for (let i = 0; i < chars.length; i++) {
    const char = chars[i]

    if (char.match(skipRe)) {
      strings += char
    }
    else {
      const codePoint = emojiToCodePoints(char)
      let emoji = emojis[codePoint]

      if (emoji === void 0) {
        strings += char
      }
      else {
        if (strings.length > 0) {
          converted.push(strings)
          strings = ''
        }
        // can safely mutate here ... famous last words ;)
        props.emoji = char
        props.codePoint = codePoint
        props.key = `${codePoint}-${i}`
        props.options = options
        // renders the emoji in React component
        converted.push(render(props))
      }

    }
  }

  if (strings.length > 0) {
    converted.push(strings)
  }

  return converted
}
