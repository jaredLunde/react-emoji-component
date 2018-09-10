import React from 'react'
import ReactDOMServer from 'react-dom/server'
import express from 'express'
import emptyArr from 'empty/array'
import emptyObj from 'empty/object'


function getEntryFiles (stats) {
  let files = []

  for (let chunk of stats.chunks) {
    if (chunk.entry) {
      files = [...chunk.files, ...files]
    }
    else {
      files = [...files, ...chunk.files]
    }
  }

  return files
}


export default function createRenderer({
  // express middleware to apply to each request
  middleware = emptyArr,
  // contents of clientStats.json from the client compiler
  clientStats,
  // the React app to render
  App,
}) {
  // initializes express
  const app = express()
  // applies any user-defined middleware
  middleware.forEach(mw => app.use(mw))
  // only needs one route
  app.get(
    '*',
    async (req, res, next) => {
      // keeps track of lazy chunks used by the current page
      const app = <App location={req.url}/>
      // renders the app to a string
      const page = ReactDOMServer.renderToString(app)
      const scripts = getEntryFiles(clientStats)
      // outputs the request
      res.set('Content-Type', 'text/html')
      res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <title>Hello world app</title>
          <meta charset="utf-8">
          <meta
            name="viewport"
            content="width=device-width, user-scalable=yes, initial-scale=1.0"
          >
          ${scripts.map(
            (s, i) => `<script
              type='text/javascript'
              src='${clientStats.publicPath}${s}'
              ${i === 0 ? 'async' : 'defer'}
            ></script>`
          ).join('')}
        </head>
        <body>
          <div id="⚛️">${page}</div>
        </body>
        </html>
      `)
    }
  )

  return app
}
