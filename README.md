![rad](assets/png/128/1f91f-1f3fd.png)
![can you believe it?](assets/png/128/1f635.png)
![i can't!](assets/png/128/1f44c-1f3fe.png)

# `react-emoji-component`
`react-emoji-component` is the most lightweight ([~24kB gzipped](https://bundlephobia.com/result?p=react-emoji-component)) and most versatile
library for using the open [EmojiOne](https://github.com/emojione/emojione) v4.0
emoji set with React. You can count on this library to be up-to-date with the
latest EmojiOne version.

With this library you can easily use your own CDN provider to host emoji
sprites and PNG files and customize emoji rendering. You can also switch between
using sprites and singular PNG icons for the lightest possible experience.
This is something I've yet to see in other React EmojiOne libraries.

## Demo
[Check out the demo on RunKit](https://runkit.com/jaredlunde/5b95a14e11e0460012e73c0e)

## Examples
[Check out this example](examples/every-emoji) on your local machine and be
mesmerized as every emoji known to man or woman loads effortlessly on a single
page.

![react-emoji-component example gif](http://g.recordit.co/Pp8oW7eDk6.gif)

## Installation
##### [react-emoji-component on Yarn](https://yarnpkg.com/en/package/react-emoji-component) &bull; [react-emoji-component on NPM](https://www.npmjs.com/package/react-emoji-component)
`yarn add react-emoji-component` or `npm i react-emoji-component`

## Basic Usage
```js
import Emojis from 'react-emoji-component'

<Emojis size={24}>
  You 👏🏻 should 👏🏻 be 👏🏻 using 👏🏻 <code>react-emoji-component</code>
</Emojis>
// ['You', <img key=..>, 'should', <img key=..>, 'be', <img key=..>, 'using', <img key=..>, <code>react-emoji-component</code>]


import {toEmojis} from 'react-emoji-component'

toEmojis('You 👏🏻 should 👏🏻 be 👏🏻 using 👏🏻 react-emoji-component', {size: 24})
// ['You', <img key=..>, 'should', <img key=..>, 'be', <img key=..>, 'using', <img key=..>, 'react-emoji-component']
```

## Exports
- [`<Emojis>`](#emojis) (`default` export)
  - A component which transforms all of the emoji strings in its children to
    EmojiOne icons
- [`<Emoji>`](#emoji)
  - This is the default emoji renderer provided silently by default to the
    `<Emojis render={}/>` prop. It renders `<img>` elements and the emoji
    character as alt-text to maintain copy-ability when highlighting text.
- [`<EmojiSprite>`](#emojisprite)
  - This is an alternative emoji renderer for the `<Emojis render={}/>` prop.
    This component uses `<span role='img'>` elements with sprites in the
    `background-image` property.
- [`createEmojisComponent()`](#createemojiscomponentoptions)
  - This function creates a new `<Emojis>` component based upon provided options.
    This is highly useful for configuring CDN paths and EmojiOne sprite-usage
    without having to declare those props each time you use the base `Emojis`
    component.
- [`toEmojis()`](#toemojisstring-options)
  - Parses a string and returns an array of React components with
    the proper emoji mappings
- [`toImage()`](#toimagecodepoint-options)
  - Creates an img `src` string from Emoji data
- [`toSprite()`](#tospritecodepoint-options)
  - Creates a `style` object from Emoji data
- [`emojiToCodePoints()`](#emojitocodepointsemoji)
  - Creates a `-` delimited list of the codePoints found in the emoji without
    empty joiners
- [`supportsWebP()`](#supportswebp)
  - Returns `true` if the environment supports `image/webm` format
- [`split()`](#splitstring)
  - The grapheme splitter used to split strings into constituent parts

------

## Documentation
### `<Emojis>`

#### Props
- children `anything React can render`
  - Children can be any object that React renders. Numbers, strings, other
    React elements, etc. The only children that are transformed by this component
    are string emojis.
- render `function`
  - **default** [`Emoji`](#emoji)
  - This prop provides a functional component which is rendered each time an emoji
    is encountered in your child string. See [`Emoji`](#emoji) for prop types.
- size `number`
  - **default** `16`
  - This is the width and height you want your emoji to render to. With the free
    license for EmojiOne, the max size you can render is `128px` without blur.
- hiDpi `bool`
  - **default** `false`
  - By setting `hiDpi` to `true`, you will create more crisp emojis for high DPI
    devices with the tradeoff that the image transfer size will be larger.
- publicPath `string`
  - **default**
    - Images: `https://cdn.jsdelivr.net/emojione/assets/4.0/png/`
    - Sprites: `https://github.com/jaredLunde/react-emoji-component/blob/master/assets/sprites/`
  - This is the public path to your EmojiOne sprites and image files. It allows
    you to self-host those files instead of using the defaults.
- extension `string`
  - **default** `png`
  - This is the file extension used for your EmojiOne sprites and image files.
    Its inclusion allows you to self-host those files and transform them to
    something like JPEG-XR or WebP instead of PNG.

### `<Emoji>`
This emoji renderer will create an `<img>` element linked to the proper EmojiOne
emoji image. It is automatically provided to `<Emojis>` by default as its render
prop.

#### Props
- emoji `string`
  - This is the untransformed string emoji that was found in your child text.
- codePoint `string`
  - This is the code point for the emoji assigned to the emoji data mapping,
    and PNGs
- options `object`
  - size `number`
    - See [Emojis](#emojis)
  - hiDpi `bool`
    - See [Emojis](#emojis)
  - publicPath `string`
    - See [Emojis](#emojis)
  - extension `string`
    - See [Emojis](#emojis)

### `<EmojiSprite>`
This emoji renderer will use a `<span>` and `background-image` along with a
CSS sprite instead of an `<img>` element. Its options are the same as
[Emoji](#emoji).

```js
import {Emojis, EmojiSprite} from 'react-emoji-component'

<Emojis render={EmojiSprite} size={48}>
  Seriously! You 👏🏻 should 👏🏻 be 👏🏻 using 👏🏻 <code>react-emoji-component</code>
</Emojis>
```

See [createEmojisComponent](#createemojiscomponentoptions) below
for an example of how to create your own `<Emojis>` component with the `EmojiSprite`
as the default renderer.

### `createEmojisComponent(options)`
You can use this to create your own default `<Emojis>` component. See
[Emojis](#emojis) for options.
```js
import {createEmojisComponent, EmojiSprite} from 'react-emoji-component'

const MyEmojis = createEmojisComponent({
  size: 24,
  publicPath: '/path/to/emoji/sprites',
  render: EmojiSprite
})
```

### `toEmojis(string, options)`
Returns an `Array` of React elements with string emojis replaced by `Emoji` React
components
```js
import {toEmojis} from 'react-emoji-component'
toEmojis('You 👏🏻 should 👏🏻 be 👏🏻 using 👏🏻 react-emoji-component', {size: 24})
// ['You', <img key=..>, 'should', <img key=..>, 'be', <img key=..>, 'using', <img key=..>, 'react-emoji-component']
```

### `toImage(codePoint, options)`
Returns an img `src` string for the file associated with the codePoint/emoji

### `toSprite(codePoint, options)`
Returns a `style` object for the sprite associated with the codePoint/emoji

### `emojiToCodePoints(emoji)`
Creates a `-` delimited list of the codePoints found in the emoji without
empty joiners.
```js
emojiToCodePoints('👨🏾‍🚒')
// "1f468-1f3fe-1f692"
```

### `supportsWebP()`
Returns `true` if the current environment supports the `image/webm` format

### `split(string)`
Splits a string by its graphemes and returns an `Array` of constituent characters.

------

### react-emoji-component/assets
#### `copy(destinationPath, options)`
This is a utility for copying EmojiOne assets such as sprites and PNGs to
a local destination in your project. It is useful for self-hosting your
emoji set.
```js
import {copy} from 'react-emoji-component/assets'

copy('/path/to/your/public/files', {excludeSprites: true})
```


##### Options
- excludePNG `bool`
  - **default** `false`
  - Excludes the single-icon image assets from the copy call
- excludeSprites `bool`
  - **default** `false`
  - Excludes the sprite image and css assets from the copy call
- excludeJSON `bool`
  - **default** `false`
  - Excludes the `emoji.json` file from the copy call.

------

### `copy-emoji-assets [destinationPath] [--excludePNG] [--excludeJSON] [--excludeSprites]`
This package comes with a binary for easily copying the EmojiOne assets to a
local destination.

See [2ality](http://2ality.com/2016/01/locally-installed-npm-executables.html)
for more information about local node bins.

```sh
node_modules/.bin/copy-emoji-assets public/images/emojione --excludeSprites
```

------

## WebP example
This contrived example assumes you've already used `react-emoji-component/assets`
to copy files to your local destination and that you've already transcoded
the files to the `image/webm` format. I'm merely giving hints here about how to
use the `createEmojisComponent()` function to your ultimate advantage.

```js
import {createEmojisComponent, EmojiSprite, supportsWebP} from 'react-emoji-component'

// use the built-in supportsWebP() function to determine if the browser
// supports it
const useWebP = supportsWebP()

// <img>
const Emojis = createEmojisComponent({
  publicPath: useWebP ? '/path/to/webp' : '/path/to/png',
  extension: useWebP ? '.webp' : '.png'
})

<Emojis size={24}>
  We 👏 have 👏 got 👏 WebP 👏 files
</Emojis>

// <span> sprites
const Emojis = createEmojisComponent({
  publicPath: useWebP ? '/path/to/webp/sprites' : '/path/to/png/sprites',
  extension: useWebP ? '.webp' : 'png',
  render: EmojiSprite,
})

<Emojis size={24}>
  We 👏 have 👏 got 👏 WebP 👏 files
</Emojis>
```


## Attributions
- Emoji icons provided free by [EmojiOne](https://github.com/emojione/emojione)
- Graphemes split by [nota/split-graphemes](https://github.com/nota/split-graphemes)
