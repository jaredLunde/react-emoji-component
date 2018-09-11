import React from 'react'
import GraphemeSplitter from 'grapheme-splitter'
import emojiToCodePoints from './emojiToCodePoints'
import Emoji from '../Emoji'
import {emojis} from '../data'
import split from './split'


// for skipping characters
const skipRe = /[\p{L}\sA-Za-z!@$%^&()_+\-=\[\]{};':"\\|,.<>\/?]/

export default function toEmojis (
  string,
  {
    render = Emoji,
    // options
    size = 16,
    publicPath,
    hiDpi,
    extension,
    // everything else is normal props
    ...props
  }
) {
  const options = {size, publicPath, hiDpi, extension}
  let strings = ''
  const converted = []
  const chars = split(string)

  for (let i = 0; i < chars.length; i++) {
    const char = chars[i]

    if (char.match(skipRe)) {
      // skips stuff we patently know are not emojis
      strings += char
    }
    else {
      const codePoint = emojiToCodePoints(char)

      if (emojis[codePoint] === void 0) {
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
