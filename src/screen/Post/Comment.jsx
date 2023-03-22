import { memo } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import Markdown from 'react-native-markdown-display'
import striptags from 'striptags'
import PropTypes from 'prop-types'

const Comment = ({ item, onCommentClicked, onUsernameClicked }) => (
  <Pressable style={styles.container} onPress={onCommentClicked}>
    <View style={styles.header}>
      <Pressable onPress={onUsernameClicked}>
        <Text style={styles.user}>{item.owner_username}</Text>
      </Pressable>
      <Text>{item.tabcoins} tabcoins | {item.children_deep_count} respostas</Text>
    </View>
    <Markdown>{striptags(item.body, ['a'])}</Markdown>
  </Pressable>
)
Comment.propTypes = {
  item: PropTypes.object.isRequired,
  onCommentClicked: PropTypes.func,
  onUsernameClicked: PropTypes.func
}

const styles = StyleSheet.create({
  container: {
    margin: 3,
    padding: 3,
    borderWidth: 2,
    borderRadius: 6,
    borderColor: '#556'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  user: {
    color: '#559'
  }
})

export default memo(Comment)
