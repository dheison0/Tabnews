const { getDefaultConfig } = require('expo/metro-config')

const config = getDefaultConfig(__dirname)

config.cacheStores = ({ FileStore }) => [
  new FileStore({ root: '.cache' })
]

config.transformer.minifierPath = require.resolve('metro-minify-esbuild')

module.exports = config
