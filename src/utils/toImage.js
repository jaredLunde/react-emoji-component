import getSize from './getSize'


const sizes = [32, 64, 128]

export default function toImage (
  unicode,
  {
    data,
    size = 16,
    publicPath = 'https://cdn.jsdelivr.net/emojione/assets/4.0/png/',
    hiDPI = false,
    extension = '.png'
  }
) {
  const [codePoint] = data.emojis[unicode]
  size = parseInt(size)

  if (hiDPI === true) {
    size = size * 2
  }

  return `${publicPath}${getSize(size, sizes)}/${codePoint}${extension}`
}
