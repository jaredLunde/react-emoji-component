import React from 'react'
import PropTypes from 'prop-types'
import {toEmojis} from './utils'
import FindAndReplace from './FindAndReplace'


export default function createEmojisComponent ({
  data,
  publicPath,
  useSprites,
  hiDPI,
  size,
  extension,
  render,
}) {
  if (__DEV__) {
    if (data === void 0) {
      throw new Error(
        `Function 'createEmojisComponent()' requires a 'data' option is set.` +
        `To use the default dataset, you must \`import {data} from ` +
        `'react-emoji-component'\` and provide it as the 'data' option.`
      )
    }
  }

  if (publicPath) {
    publicPath = publicPath.endsWith('/') === false ? `${publicPath}/` : publicPath
  }

  function Emojis (props) {
    return React.Children.count(props.children)
      ? FindAndReplace({
          replacer: toEmojis,
          render,
          useSprites,
          hiDPI,
          data,
          publicPath,
          size,
          extension,
          ...props
        })
      : null
  }

  if (__DEV__) {
    Emojis.propTypes = {
      publicPath: PropTypes.string,
      useSprites: PropTypes.bool,
      hiDPI: PropTypes.bool,
      size: PropTypes.number,
      extension: PropTypes.string,
      render: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.instanceOf(React.Component),
      ])
    }
  }

  return Emojis
}
