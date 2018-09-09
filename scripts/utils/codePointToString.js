// Credit: https://github.com/emojione/emojione
// for converting unicode code points and code pairs to their respective
// characters
module.exports = function codePointToString (unicode) {
  // > codePointToString('1f3b1')
  // < "🎱"
  if (unicode.indexOf('-') > -1) {
    const parts = []
    const s = unicode.split('-')

    for (let i = 0; i < s.length; i++) {
      let part = parseInt(s[i], 16)

      if (part >= 0x10000 && part <= 0x10FFFF) {
        var hi = Math.floor((part - 0x10000) / 0x400) + 0xD800
        var lo = ((part - 0x10000) % 0x400) + 0xDC00
        part = (String.fromCharCode(hi) + String.fromCharCode(lo))
      }
      else {
        part = String.fromCharCode(part)
      }

      parts.push(part)
    }

    return parts.join('')
  }
  else {
    const s = parseInt(unicode, 16)

    if (s >= 0x10000 && s <= 0x10FFFF) {
      var hi = Math.floor((s - 0x10000) / 0x400) + 0xD800
      var lo = ((s - 0x10000) % 0x400) + 0xDC00
      return (String.fromCharCode(hi) + String.fromCharCode(lo))
    }
    else {
      return String.fromCharCode(s)
    }
  }
}
