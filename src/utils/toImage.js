import getSize from './getSize'
import emojiToCodePoints from './emojiToCodePoints'


const sizes = [32, 64, 128]

export default function toImage (
  codePoint,
  {
    size = 16,
    publicPath = 'https://cdn.jsdelivr.net/emojione/assets/4.0/png/',
    hiDPI = false,
    extension = '.png'
  }
) {
  size = parseInt(size)

  if (hiDPI === true) {
    size = size * 2
  }

  return `${publicPath}${getSize(size, sizes)}/${codePoint}${extension}`
}
