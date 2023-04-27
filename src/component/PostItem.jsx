import { memo } from 'react'
import { humanReadableDate } from '../libs/utils'
import PropTypes from 'prop-types'
import { colors } from '../colors'
import { View, Text, StyleSheet, Pressable } from 'react-native'

const MAX_SIZE_OF_BODY_AS_TITLE = 45
const bodyAsTitle = (body) => {
  let title = body.slice(undefined, MAX_SIZE_OF_BODY_AS_TITLE)
  title = title.trim()
  if (body.length > MAX_SIZE_OF_BODY_AS_TITLE) {
    title += '...'
  }
  return title
}

const PostItem = ({ post, navigation }) => (
  <Pressable
    style={styles.container}
    onPress={() => navigation.navigate('Post', { post })}>
    <Text style={styles.title}>
      {post.title ?? bodyAsTitle(post.body)}
    </Text>
    <View style={styles.informations}>
      <Pressable
        style={{ flex: 1 }}
        onPress={() => navigation.navigate('User', { user: post.owner_username })}>
        <Text style={[styles.informationText, { textAlign: 'left' }]}>
          {post.owner_username}
        </Text>
      </Pressable>
      <Text style={[styles.informationText, { textAlign: 'center' }]}>
        {post.tabcoins} tabcoins
      </Text>
      <Text style={[styles.informationText, { textAlign: 'right' }]}>
        {humanReadableDate(post.created_at)}
      </Text>
    </View>
  </Pressable>
)
PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 5
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
    marginBottom: 3
  },
  informations: {
    flex: 1,
    flexDirection: 'row'
  },
  informationText: {
    flex: 1,
    color: colors.information,
    fontSize: 13
  }
})

export default memo(PostItem)
