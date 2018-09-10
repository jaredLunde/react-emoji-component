const fs = require('fs-extra')
const path = require('path')
const css = require('css')
const utils = require('./utils')


// copies over the assets to the local repo
fs.removeSync(path.join(__dirname, '../assets/sprites'))
fs.copySync(
  path.join(__dirname, '../node_modules/emojione-assets/sprites'),
  path.join(__dirname, '../assets/sprites')
)

fs.removeSync(path.join(__dirname, '../assets/png'))
fs.copySync(
  path.join(__dirname, '../node_modules/emojione-assets/png'),
  path.join(__dirname, '../assets/png')
)

fs.copySync(
  path.join(__dirname, '../node_modules/emojione-assets/emoji.json'),
  path.join(__dirname, '../assets/emoji.json')
)

const emojiData = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '../assets/emoji.json')
  )
)

const emoji24 = css.parse(
  fs.readFileSync(
    path.join(__dirname, '../assets/sprites/emojione-sprite-24.css')
  ).toString()
)

// creates a map between selectors and background positions
const EMOJI_SPRITE_24 = {}

for (let rule of emoji24.stylesheet.rules) {
  if (rule.selectors) {
    const selector = rule.selectors[0]
    let bgPos

    for (let declaration of rule.declarations) {
      if (declaration.property === 'background-position') {
        bgPos = declaration.value.split(' ').map(
          p => parseInt(p.replace('px', '')) / -25
        )
      }
    }

    EMOJI_SPRITE_24[selector] = bgPos
  }
}


// just gives some organization to the output
const emojiDataKeys = Object.keys(emojiData)
emojiDataKeys.sort()

// map of emoji unicode -> emoji sprite info
let EMOJI_MAP = 'export const emojis = {\n'
// array of categories for EMOJI_MAP pairing - a slight compression
let CATEGORIES = 'export const categories = [\n'
let SPRITE_SIZES = 'export const spriteSizes = [\n'
const categoryCache = []
const spriteSizeCache = {}
const diversityMod = ['1f3fb', '1f3fc', '1f3fd', '1f3fe', '1f3ff',]

for (let codePoint of emojiDataKeys) {
  const data = emojiData[codePoint]
  EMOJI_MAP += `  '${codePoint}': [`

  const category =
    codePoint.includes('-1f3f') || diversityMod.includes(codePoint)
      ? 'diversity'
      : data.category

  let categoryIdx = categoryCache.indexOf(category)

  if (categoryIdx === -1) {
    categoryCache.push(category)
    categoryIdx = categoryCache.length - 1
    CATEGORIES += `  '${category}',\n`
  }

  EMOJI_MAP += `${categoryIdx}, `

  let pos = EMOJI_SPRITE_24[`.emojione-24-${category}._${codePoint}`]

  if (pos === void 0) {
    pos = EMOJI_SPRITE_24[`.emojione-24-${data.category}._${codePoint}`]
  }

  let sizeCache = spriteSizeCache[categoryIdx]
  if (sizeCache === void 0) {
    spriteSizeCache[categoryIdx] = {rows: 1, cols: 1}
    sizeCache = spriteSizeCache[categoryIdx]
  }

  sizeCache.cols = Math.max(pos[0], sizeCache.cols)
  EMOJI_MAP += pos[0]

  if (pos[1] > 0) {
    EMOJI_MAP += `, ${pos[1]}`
    sizeCache.rows = Math.max(pos[1], sizeCache.rows)
  }

  EMOJI_MAP += `],\n`
}

for (let categoryID in spriteSizeCache) {
  const sizeCache = spriteSizeCache[categoryID]
  SPRITE_SIZES += `  [${sizeCache.cols + 1}, ${sizeCache.rows === 1 ? sizeCache.rows : sizeCache.rows + 1}],\n`
}

EMOJI_MAP += '}'
CATEGORIES += ']'
SPRITE_SIZES += ']'
// console.log(EMOJI_MAP)
// console.log(CATEGORIES)

const FILE = `// automatically generated, do not change manually
//
// {
//    codePoint: [
//      0: categoryID // categories[emojis[unicode][1]],
//      1: spriteColumnNumber,
//      2: spriteRowNumber,
//    ]
// }
${EMOJI_MAP}

// ['people', ... // index === categoryID]
${CATEGORIES}

// [
//   [cols, rows]  // index === categoryID
//                 // spriteSize = {width: cols * (iconSize + 1), height: rows * (iconSize + 1)}
// ]
${SPRITE_SIZES}
`

fs.writeFileSync(path.join(__dirname, '../src/data.js'), FILE)
