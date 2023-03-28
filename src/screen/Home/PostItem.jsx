import { memo } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { theme } from '../../colors'

const textStyle = (textAlign) => ({ flex: 1, color: theme.colors.text, textAlign })

const PostItem = ({ post, navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate('Post', { post })}>
    <View style={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
      <View style={styles.information}>
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

const styles = StyleSheet.create({
  container: {
    margin: 6
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: theme.colors.text
  },
  information: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 3
  }
})

export default memo(PostItem)
