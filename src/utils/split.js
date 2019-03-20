import GraphemeSplitter from 'grapheme-splitter'


const splitter = new GraphemeSplitter()
export default splitter.splitGraphemes.bind(splitter)