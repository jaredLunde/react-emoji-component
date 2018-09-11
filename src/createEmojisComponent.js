import React from 'react'
import PropTypes from 'prop-types'
import emptyObj from 'empty/object'
import walk from './walk'
import {toEmojis} from './utils'


export default function createEmojisComponent (options = emptyObj) {
  let publicPath = options.publicPath

  if (publicPath !== void 0 && publicPath !== null) {
    options.publicPath =
      publicPath.endsWith('/') === false ? `${publicPath}/` : publicPath
  }

  function Emojis (props) {
    props = Object.assign({}, props)
    const children = props.children
    delete props.children

    if (options !== emptyObj) {
      Object.assign(props, options)
    }

    return React.Children.count(children) ? walk(children, toEmojis, props) : null
  }

  if (__DEV__) {
    Emojis.propTypes = {
      size: PropTypes.number,
      hiDpi: PropTypes.bool,
      publicPath: PropTypes.string,
      extension: PropTypes.string,
      render: PropTypes.func
    }
  }

  return Emojis
}
