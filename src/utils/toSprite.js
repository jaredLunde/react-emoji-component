import * as data from '../data'
import isChrome from './isChrome'


const DEFAULT_PUBLIC_PATH = 'https://github.com/jaredLunde/react-emoji-component/blob/master/assets/sprites/'
const imageRendering = isChrome === true ? '-webkit-optimize-contrast' : 'crisp-edges'

const getPos = (pos, iconSize) => `${pos * -1 * (iconSize + 1)}px`
const getSize = (x, iconSize) => `${((iconSize + 1) * x )- 1}px`

export default function toSprite (
  codePoint,
  {
    size = 16,
    hiDpi = false,
    publicPath = DEFAULT_PUBLIC_PATH,
    extension = '.png'
  }
) {
  const [categoryID, col, row] = data.emojis[codePoint]
  const category = data.categories[categoryID]
  const [spriteCols, spriteRows] = data.spriteSizes[categoryID]

  size = parseInt(size)
  let iconSize =
    size <= 24
      ? 24
      : size <= 32
        ? 32
        : size <= 40
          ? 40
          : size <= 64
            ? 64
            : 128

  let x = ''

  if (iconSize === 128) {
    hiDpi = false
    iconSize = 64
    x = '@2x'
  }

  if (hiDpi === true) {
    x = '@2x'
  }

  const scaleSize = (size / (iconSize - 1)) * (iconSize - 1)
  const backgroundPosition =
    row === void 0
      ? `${getPos(col, scaleSize)} 0`
      : `${getPos(col, scaleSize)} ${getPos(row, scaleSize)}`
  // const backgroundSize = hiDpi === true ? '50%' : void 0
  const bgHeight = getSize(spriteRows, scaleSize)
  const bgWidth = getSize(spriteCols, scaleSize)
  const backgroundSize = `${bgWidth} ${bgHeight}`
  const qs = publicPath === DEFAULT_PUBLIC_PATH ? '?raw=true' : ''

  return {
    width: scaleSize,
    height: scaleSize,
    imageRendering,
    display: 'inline-block',
    fontSize: 0,
    lineHeight: 1.0,
    verticalAlign: 'middle',
    contain: 'strict',
    backgroundImage: `url(${publicPath}emojione-sprite-${iconSize}-${category}${x}${extension}${qs})`,
    backgroundSize,
    backgroundPosition,
    backgroundRepeat: 'no-repeat'
  }
}
