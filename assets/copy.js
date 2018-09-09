var fs = require('fs-extra')
var path = require('path')


module.exports = function copy (
  dest,  // directory path to copy the assets to
  {
    includeSprites = true, // includes css and png sprites
    includePNG = true,     // incudes all PNG files
    includeJSON = true     // includes the JSON manifest
  }
) {
  var copies = []

  if (includeJSON === true) {
    copies.push(fs.copy('./emoji.json', path.join(dest, 'emoji.json')))
  }

  if (includePNG === true) {
    copies.push(fs.copy('./png', path.join(dest, 'png')))
  }

  if (includePNG === true) {
    copies.push(fs.copy('./sprites', path.join(dest, 'sprites')))
  }

  return Promise.all(copies)
}
