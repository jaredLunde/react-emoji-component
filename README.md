![rad](assets/png/128/1f91f-1f3fd.png)
![can you believe it?](assets/png/128/1f635.png)
![i can't!](assets/png/128/1f44c-1f3fe.png)

# `react-emoji-component`
`react-emoji-component` is the most lightweight and most versatile library
for using the open [EmojiOne](https://github.com/emojione/emojione) v4+ emoji set
with React. You can count on this library to be up-to-date with the latest
EmojiOne version.

With this library you can easily use your own CDN provider to host emoji
sprites and PNG files and customize emoji rendering. You can also switch between
using sprites and singular PNG icons for the lightest possible experience.
This is something I've yet to see in other React EmojiOne libraries.

## Installation
##### [Find it on NPM](https://www.npmjs.com/package/react-emoji-component)
`yarn add react-emoji-component` or `npm i react-emoji-component`

## Basic Usage
```js
import Emojis from 'react-emoji-component'

<Emojis size={24}>
  You 👏🏻 should 👏🏻 be 👏🏻 using 👏🏻 <code>react-emoji-component</code>
</Emojis>
// ['You', <img key=..>, 'should', <img key=..>, 'be', <img key=..>, 'using', <img key=..>, <code>react-emoji-component</code>]

import {data, toEmojis} from 'react-emoji-component'
toEmojis('You 👏🏻 should 👏🏻 be 👏🏻 using 👏🏻 react-emoji-component', {data, size: 24})
// ['You', <img key=..>, 'should', <img key=..>, 'be', <img key=..>, 'using', <img key=..>, 'react-emoji-component']
```

## Exports
- [`<Emojis>`](#emojis) (`default` export)
  - This is the React component that comes out-of-the-box
- [`<Emoji>`](#emoji)
  - This is the default component provided to the `<Emojis render={}/>` prop
- [`createEmojisComponent()`](#createemojiscomponentoptions)
  - This function creates a new `<Emojis>` component based upon provided options.
    This is highly useful for configuring CDN paths and EmojiOne sprite-usage
    without having to declare those props each time you use the base `Emojis`
    component.
- [`toEmojis()`](#toemojisstring-options)
  - Parses a string and returns an array of React components with
    the proper emoji mappings
- [`toImage()`](#toimageemoji-options)
  - Creates an img `src` string from Emoji data
- [`toSprite()`](#tospriteemoji-options)
  - Creates a `style` object from Emoji data
- [`supportsWebP()`](#supportswebp)
  - Returns `true` if the environment supports `image/webm` format
- [`split()`](#splitstring)
  - The grapheme splitter used to split strings into constituent parts
- `data`
  - This is the data file which contains a map of relevant emoji data. You could
    for example create your own data file which included things like
    `:short_names:` and `:)` ascii mappings which would be passed to
    the `<Emojis render={}>` render function.
    ```js
      emojis: {
        ...
        🦃: [codePoints, categoryID, spriteColumnAndRowIndex],
        ...
      }
    ```
    ```js
      categories: [
        'symbols',  // ID = 0
        'regional', // ID = 1 ...
        'flags',
        'travel',
        'people',
        'nature',
        'objects',
        'food',
        'diversity',
        'activity'
      ]
    ```
    ```js
    spriteSizes: [
      [291, 1], // [cols, rows]
      [26, 1],
      [269, 1],
      [123, 1],
      [393, 1],
      [178, 1],
      [198, 1],
      [106, 1],
      [268, 33],
      [106, 1],
    ]
    ```

------

## Documentation
### `<Emojis>`

#### Props
- children `anything React can render`
  - Children can be any object that React renders. Numbers, strings, other
    React elements, etc. The only children that are transformed by this component
    are string emojis.
- render `function|React.Component`
  - **default** [`Emoji`](#emoji)
  - This prop provides a component which is rendered each time an emoji is
    encountered in your child string. See [`Emoji`](#emoji) for prop types.
- size `number`
  - **default** `16`
  - This is the width and height you want your emoji to render to. With the free
    license for EmojiOne, the max size you can render is `128px` without blur.
- hiDPI `bool`
  - **default** `false`
  - By setting `hiDPI` to `true`, you will create more crisp emojis for high DPI
    devices with the tradeoff that the image transfer size will be larger.
- useSprites `bool`
  - **default** `false`
  - When you set `useSprites` to `true`, the emoji renderer will use a `<span>`
    and `background-image` along with a CSS sprite instead of an `<img>` element
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
This component is automatically provided to `<Emojis>` by default as its render
prop.

#### Props
- emoji `string`
  - This is the untransformed string emoji that was found in your child text.
  - **required**
- size `number`
  - See [Emojis](#emojis)
- publicPath `string`
  - See [Emojis](#emojis)
- hiDPI `bool`
  - See [Emojis](#emojis)
- extension `string`
  - See [Emojis](#emojis)
- useSprites `bool`
  - **default** `false`
  - See [Emojis](#emojis)
- data `object`
  - **default** `react-emoji-component/data`
  - This is the data map used to determine emoji code points and
    sprite background positions
- style `object`
  - **default** `undefined`
  - An optional style prop that gets assigned to the rendered style prop.


### `createEmojisComponent(options)`
You can use this to create your own default `<Emojis>` component. See
[Emojis](#emojis) for options.
```js
import {data, createEmojisComponent} from 'react-emoji-component'

const MyEmojis = createEmojisComponent({
  data,
  size: 24,
  publicPath: '/path/to/emoji/sprites',
  useSprites: true
})
```

### `toEmojis(string, options)`
Returns an `Array` of React elements with string emojis replaced by `Emoji` React
components
```js
import {data, toEmojis} from 'react-emoji-component'
toEmojis('You 👏🏻 should 👏🏻 be 👏🏻 using 👏🏻 react-emoji-component', {data, size: 24})
// ['You', <img key=..>, 'should', <img key=..>, 'be', <img key=..>, 'using', <img key=..>, 'react-emoji-component']
```

### `toImage(emoji, options)`
Returns an img `src` string for the file associated with the emoji

### `toSprite(emoji, options)`
Returns a `style` object for the sprite associated with the emoji

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
import {createEmojisComponent, data, supportsWebP} from 'react-emoji-component'

// use the built-in supportsWebP() function to determine if the browser
// supports it
const useWebP = supportsWebP()

// <img>
const Emojis = createEmojisComponent({
  data,
  publicPath: useWebP ? '/path/to/webp' : '/path/to/png',
  extension: useWebP ? '.webp' : '.png'
})

<Emojis size={24}>
  We 👏 have 👏 got 👏 WebP 👏 files
</Emojis>

// <span> sprites
const EmojiSprites = createEmojisComponent({
  data,
  publicPath: useWebP ? '/path/to/webp/sprites' : '/path/to/png/sprites',
  extension: useWebP ? '.webp' : 'png',
  useSprites: true,
})

<EmojiSprites size={24}>
  We 👏 have 👏 got 👏 WebP 👏 files
</EmojiSprites>
```


## Attributions
- Emoji icons provided free by [EmojiOne](https://github.com/emojione/emojione)
- Graphemes split by [orling/grapheme-splitter](https://github.com/orling/grapheme-splitter)
