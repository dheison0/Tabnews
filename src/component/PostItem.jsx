import { memo } from 'react'
import { humanReadableDate } from '../libs/utils'
import PropTypes from 'prop-types'
import { theme } from '../colors'
import { View, Text, StyleSheet, Pressable } from 'react-native'

const PostItem = ({ post, navigation }) => (
  <Pressable
    style={styles.container}
    onPress={() => navigation.navigate('Post', { post })}>
    <Text style={styles.title}>{post.title}</Text>
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
    color: theme.colors.text,
    marginBottom: 3
  },
  informations: {
    flex: 1,
    flexDirection: 'row'
  },
  informationText: {
    flex: 1,
    color: '#DDD',
    fontSize: 12
  }
})

export default memo(PostItem)
