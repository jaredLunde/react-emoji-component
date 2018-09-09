import React from 'react'


export default function Emoji ({emoji, style, ...props}) {
  const [unicode, codePoint, category, position] = emoji

  return (
    <span
      role='img'
      alt={unicode}
      style={toSprite(emoji, style)}
      {...props}
    >
      {codePoint.split('-').map(s => `&#${s};`).join('')}
    </span>
  )
}
