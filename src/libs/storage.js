import AsyncStorage from '@react-native-async-storage/async-storage'

export const addBookmark = async (post) => {
  const time = new Date().getTime()
  await AsyncStorage.setItem(
    `@bookmark:${post.owner}/${post.slug}`,
    JSON.stringify({
      addedAt: time,
      title: post.title,
      owner: post.owner,
      slug: post.slug
    })
  )
}

export const getBookmarks = async () => {
  const allKeys = await AsyncStorage.getAllKeys()
  const bookmarksKeys = allKeys.filter((key) => key.startsWith('@bookmark'))
  const bookmarks = bookmarksKeys.map(async (key) => {
    const item = await AsyncStorage.getItem(key)
    return JSON.parse(item)
  })
  const result = await Promise.all(bookmarks)
  return result
}

export const removeBookmark = async (post) => {
  await AsyncStorage.removeItem(`@bookmark:${post.owner}/${post.slug}`)
}

export const isBookmarked = async (post) => {
  const item = await AsyncStorage.getItem(`@bookmark:${post.owner}/${post.slug}`)
  return item !== null
}
