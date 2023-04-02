import { TouchableOpacity, Text } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'

const Item = ({ post, navigation }) => (
  <TouchableOpacity
    style={styles.item.container}
    onPress={() => navigation.navigate('Post', { post })}
  >
    <Text style={styles.item.title}>{post.title}</Text>
    <Text style={styles.item.owner}>{post.owner}</Text>
  </TouchableOpacity>
)
Item.propTypes = {
  post: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
}

export default Item
