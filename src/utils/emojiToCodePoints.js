const cache = {}


export default uc => {
  if (cache[uc] === void 0) {
    const chars = Array.from(uc)
    const codePoints = []

    for (let i = 0; i < chars.length; i++) {
      const char = chars[i]
      const codePoint = char.codePointAt(0)
      // ignores empty joiners (0x200D) and variation selectors (0xFE0F)
      if (codePoint !== 0x200D && codePoint !== 0xFE0F) {
        codePoints.push(codePoint.toString(16).padStart(4, '0'))
      }
    }

    cache[uc] = codePoints.join('-')
  }

  return cache[uc]
}
