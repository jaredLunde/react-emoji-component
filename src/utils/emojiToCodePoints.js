const cache = {}


export default function emojiToCodePoints (emoji) {
  if (cache[emoji] === void 0) {
    const codePoints = []

    for (let char of Array.from(emoji)) {
      const codePoint = char.codePointAt(0)
      // ignores empty joiners (0x200D) and variation selectors (0xFE0F)
      if (codePoint !== 0x200D && codePoint !== 0xFE0F) {
        codePoints.push(codePoint.toString(16).padStart(4, '0'))
      }
    }

    cache[emoji] = codePoints.join('-')
  }

  return cache[emoji]
}
