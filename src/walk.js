import React from 'react'
import emptyObj from 'empty/object'


const walk = (component, visitor, props) => {
  return React.Children.map(
    component,
    child =>
      React.isValidElement(child)
        ? React.cloneElement(
        child,
        emptyObj,
        walk(child.props.children, visitor, props)
        )
        : (typeof child === 'string' ? visitor(child, props) : child)
  )
}

export default walk
