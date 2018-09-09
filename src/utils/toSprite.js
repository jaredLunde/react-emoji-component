import getIconSize from './getSize'


const DEFAULT_PUBLIC_PATH = 'https://github.com/jaredLunde/react-emoji-component/blob/master/assets/sprites/'
const sizes = [24, 32, 40, 64, 128]

function getPos (pos, iconSize) {
  return `${pos * -1 * (iconSize + 1)}px`
}

function getSize (x, iconSize) {
  return `${((iconSize + 1) * x )- 1}px`
}

export default function toSprite (
  unicode,
  {
    data,
    emoji,
    size = 16,
    publicPath = DEFAULT_PUBLIC_PATH,
    hiDPI = false,
    extension = '.png',
    style,
  }
) {
  const [_, categoryID, bgPos] = data.emojis[unicode]
  const category = data.categories[categoryID]
  const [spriteCols, spriteRows] = data.spriteSizes[categoryID]

  size = parseInt(size)
  let iconSize = getIconSize(size, sizes)
  let x = ''

  if (iconSize === 128) {
    hiDPI = false
    iconSize = 64
    x = '@2x'
  }

  if (hiDPI === true) {
    x = '@2x'
  }
  const scaleSize = (size / (iconSize - 1)) * (iconSize - 1)
  const backgroundPosition =
    Array.isArray(bgPos)
      ? `${getPos(bgPos[0], scaleSize)} ${getPos(bgPos[1], scaleSize)}`
      : `${getPos(bgPos, scaleSize)} 0`
  // const backgroundSize = hiDPI === true ? '50%' : void 0
  const bgHeight = getSize(spriteRows, scaleSize)
  const bgWidth = getSize(spriteCols, scaleSize)
  const backgroundSize = `${bgWidth} ${bgHeight}`
  const qs = publicPath === DEFAULT_PUBLIC_PATH ? '?raw=true' : ''
  const styles = {
    width: scaleSize,
    height: scaleSize,
    display: 'inline-block',
    position: 'relative',
    fontSize: 'inherit',
    lineHeight: 1.0,
    verticalAlign: 'middle',
    textIndent: '-9999em',
    imageRendering: 'optimizeQuality',
    contain: 'strict',
    backgroundImage: `url(${publicPath}emojione-sprite-${iconSize}-${category}${x}${extension}${qs})`,
    backgroundSize,
    backgroundPosition,
    backgroundRepeat: 'no-repeat'
  }

  return style ? Object.assign(styles, style) : styles
}
