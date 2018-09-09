var path = require('path')
var copy = require('./copy')


var args = {_: [], excludeSprites: false, excludePNG: false, excludeJSON: false}

process.argv.slice(2).forEach((v, i) => {
  if (v.startsWith('--')) {
    args[v.slice(2)] = true
  }
  else {
    args._.push(v)
  }
})

var dest = args._[0]
if (!dest) {
  throw new Error('A destination path was not provided')
}

copy(path.resolve(process.cwd(), dest), args)
