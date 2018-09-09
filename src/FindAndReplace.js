import React from 'react'
import emptyObj from 'empty/object'


function traverse (children, props, replacer) {
  return React.Children.map(
    children, child => {
      if (React.isValidElement(child)) {
        return React.cloneElement(
          child,
          emptyObj,
          traverse(child.props.children, props, replacer)
        )
      }

      return typeof child === 'string' ? replacer(child, props) : child
    }
  )
}


export default function FindAndReplace ({children, replacer, ...props}) {
  return (
    React.Children.count(children)
      ? traverse(children, props, replacer)
      : null
  )
}
