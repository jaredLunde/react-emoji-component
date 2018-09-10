import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'


function hydrate (App) {
  ReactDOM.hydrate(<App/>, document.getElementById('⚛️'))
}

module.hot && module.hot.accept('../App', () => hydrate(require('../App').default))
hydrate(App)
