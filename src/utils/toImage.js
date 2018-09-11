import emojiToCodePoints from './emojiToCodePoints'


export default function toImage (
  codePoint,
  {
    size = 16,
    hiDpi = false,
    publicPath = 'https://cdn.jsdelivr.net/emojione/assets/4.0/png/',
    extension = '.png'
  }
) {
  size = parseInt(size)
  size = hiDpi ? size * 2 : size
  size = size < 32 ? 32 : size <= 64 ? 64 : 128
  return `${publicPath}${size}/${codePoint}${extension}`
}
