export default function emojiToCodePoints (emoji) {
  const codePoints = []

  for (let char of Array.from(emoji)) {
    const codePoint = char.codePointAt(0)
    if (codePoint !== 0x200D) {
      codePoints.push(codePoint.toString(16))
    }
  }

  return codePoints.join('-')
}
