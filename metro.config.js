module.exports = {
  cacheStores: ({ FileStore }) => [
    new FileStore({ root: '.cache' })
  ]
}
