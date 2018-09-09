import React from 'react'
import GraphemeSplitter from 'grapheme-splitter'
import Emoji from '../Emoji'
import * as data from '../data'


const splitter = new GraphemeSplitter()

export function emojify (
  string,
  {render = Emoji, hiDPI = false, size = 16, data = data, ...props}
) {
  const converted = []

  for (let char of splitter.splitGraphemes(string)) {
    let emoji = data.emojis[char]

    if (emoji !== void 0) {
      // can safely mutate here
      if (emoji.length === 4) {
        emoji.unshift(char)
      }
      // can safely mutate here as well
      props.emoji = emoji
      props.hiDPI = hiDPI
      props.size = size
      // renders the emoji in React component
      converted.push(React.createElement(render, props))
    }
    else {
      converted.push(char)
    }
  }

  return converted
}
