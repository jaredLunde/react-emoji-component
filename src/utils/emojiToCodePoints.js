const cache = {}


export default function emojiToCodePoints (emoji) {
  if (cache[emoji] === void 0) {
    const codePoints = []

    for (let char of Array.from(emoji)) {
      const codePoint = char.codePointAt(0)
      if (codePoint !== 0x200D) {
        codePoints.push(codePoint.toString(16))
      }
    }

    cache[emoji] =  codePoints.join('-')
  }

  return cache[emoji]
}
