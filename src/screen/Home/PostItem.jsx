import { memo } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { theme } from '../../colors'
import styles from './styles'
import PropTypes from 'prop-types'

const textStyle = (textAlign) => ({ flex: 1, color: theme.colors.text, textAlign })

const PostItem = ({ post, navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate('Post', { post })}>
    <View style={styles.postItem.container}>
      <Text style={styles.postItem.title}>{post.title}</Text>
      <View style={styles.postItem.information}>
        <Text style={textStyle('left')}>{post.owner}</Text>
        <Text style={textStyle('center')}>{post.tabcoins} tabcoins</Text>
        <Text style={textStyle('right')}>{post.time}</Text>
      </View>
    </View>
  </TouchableOpacity>
)
PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
}

export default memo(PostItem)
