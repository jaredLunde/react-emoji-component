var fs = require('fs-extra')
var path = require('path')


module.exports = function copy (
  dest,  // directory path to copy the assets to
  {
    excludeSprites = false, // excludes css and png sprites
    excludePNG = false,     // excudes all PNG files
    excludeJSON = false     // excludes the JSON manifest
  }
) {
  var copies = []

  if (excludeJSON === false) {
    copies.push(fs.copy(path.join(__dirname, 'emoji.json'), path.join(dest, 'emoji.json')))
  }

  if (excludePNG === false) {
    copies.push(fs.copy(path.join(__dirname, 'png'), path.join(dest, 'png')))
  }

  if (excludeSprites === false) {
    copies.push(fs.copy(path.join(__dirname, 'sprites'), path.join(dest, 'sprites')))
  }

  return Promise.all(copies)
}
