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
const categoryCache = []

for (let codePoint of emojiDataKeys) {
  const data = emojiData[codePoint]
  EMOJI_MAP += `  '${utils.codePointToString(codePoint)}': [`
  EMOJI_MAP += `'${codePoint}',`

  const category =
    codePoint.includes('-1f3f') || codePoint.startsWith('1f3f')
      ? 'diversity'
      : data.category

  let categoryIdx = categoryCache.indexOf(category)

  if (categoryIdx === -1) {
    categoryCache.push(category)
    categoryIdx = categoryCache.length - 1
    CATEGORIES += `  '${category}',\n`
  }

  EMOJI_MAP += ` ${categoryIdx},`

  let pos = EMOJI_SPRITE_24[`.emojione-24-${category}._${codePoint}`]

  if (pos === void 0) {
    pos = EMOJI_SPRITE_24[`.emojione-24-${data.category}._${codePoint}`]
  }

  if (pos[1] === 0) {
    pos = pos[0]
  }

  EMOJI_MAP += ` ${JSON.stringify(pos)}`
  EMOJI_MAP += `],\n`
}

EMOJI_MAP += '}'
CATEGORIES += ']'
// console.log(EMOJI_MAP)
// console.log(CATEGORIES)

const FILE = `// automatically generated, do not change manually
//
// {
//    unicode: [
//      0: codePoint,
//      1: categoryIdx // categories[emojis[codePoint].c],
//      2: positionInCategory (background-position: \${-1 * (iconSize + 1) * p}px),
//    ]
// }
${EMOJI_MAP}

${CATEGORIES}
`

fs.writeFileSync(path.join(__dirname, '../src/data.js'), FILE)
