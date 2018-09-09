import Emojify from './Emojify'
import Emoji from './Emoji'


export default function createEmojifier ({
  publicPath,
  render = Emoji,
  useSprites = false,
  hiDPI = false,
  defaultSize = 16
}) {
  publicPath = publicPath || (
    useSprites
      ? 'https://raw.githubusercontent.com/jaredLunde/react-emoji-component/master/sprites/'
      : 'https://cdn.jsdelivr.net/emojione/assets/4.0/png/'
  )

  return
}
