# `react-emoji-component`
`react-emoji-component` is the most lightweight and most versatile emoji library
for using EmojiOne v4+ with React. You can count on this library to be
up-to-date with the latest EmojiOne version.

With this library you can easily use your own CDN provider to host emoji
sprites and PNG files and customize emoji rendering. You can also switch between
using sprites and singular PNG icons for the lightest possible experience.
This is something I've yet to see in other React EmojiOne libraries.

## Installation
`yarn add react-emoji-component` or `npm i react-emoji-component`

## Usage
### Exports
- `Emojify` (`default` export)
  - This is the React component that comes out-of-the-box
- `Emoji`
  - This is the default component provided to the `<Emojify render={}/>` prop
- `createEmojifier`
  - This function creates a new `<Emojify>` component based upon provided options.
    This is highly useful for configuring CDN paths and EmojiOne sprite-usage.
- `utils`
  - `emojify` - Parses a string and returns an array of React components with
    the proper emoji mappings
  - `toImage` - Creates an img `src` from Emoji data
  - `toSprite` - Creates a `style` object from Emoji data
  - `split` - The grapheme splitter used to split strings into constituent parts
- `data`
  - This is the data file which contains a map of:
    ```js
      emojis: {
        unicode: [codePoints, categoryID, spriteBackgroundPosition]
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

### react-emoji-component/assets
- `copy`
  - This is a utility for copying EmojiOne assets such as sprites and PNGs to
    a local destination in your project. It is useful for self-hosting your
    emoji set.

## Attributions
- Emoji icons provided free by [EmojiOne](https://github.com/emojione/emojione)
- Graphemes split by [orling/grapheme-splitter](https://github.com/orling/grapheme-splitter)
