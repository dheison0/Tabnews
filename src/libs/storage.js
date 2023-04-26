import AsyncStorage from '@react-native-async-storage/async-storage'

export const addBookmark = async (post) => {
  const time = new Date().getTime()
  await AsyncStorage.setItem(
    `@bookmark:${post.owner_username}/${post.slug}`,
    JSON.stringify({ addedAt: time, post })
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
  await AsyncStorage.removeItem(`@bookmark:${post.owner_username}/${post.slug}`)
}

export const isBookmarked = async (post) => {
  const item = await AsyncStorage.getItem(`@bookmark:${post.owner_username}/${post.slug}`)
  return item !== null
}
