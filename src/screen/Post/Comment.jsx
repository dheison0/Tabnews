import { memo } from 'react'
import { View, Text, Pressable } from 'react-native'
import { markdownFixer } from '../../libs/markdownFixer'
import Markdown from 'react-native-markdown-display'
import PropTypes from 'prop-types'
import styles from './styles'

const Comment = ({ item, onPress, onUsernamePress }) => (
  <Pressable style={styles.comment.container} onPress={onPress}>
    <View style={styles.comment.header}>
      <Pressable onPress={onUsernamePress}>
        <Text style={styles.comment.headerText}>{item.owner_username}</Text>
      </Pressable>
      <Text style={styles.comment.headerText}>
        {item.tabcoins} tabcoins | {item.children_deep_count} respostas
      </Text>
    </View>
    <Markdown style={styles.markdownRenderer}>{markdownFixer(item.body)}</Markdown>
  </Pressable>
)
Comment.propTypes = {
  item: PropTypes.object.isRequired,
  onPress: PropTypes.func,
  onUsernamePress: PropTypes.func
}

export default memo(Comment)
