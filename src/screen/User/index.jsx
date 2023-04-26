import { memo, useState } from 'react'
import { TabNews } from '../../libs/tabnews'
import PropTypes from 'prop-types'
import { View, Text, FlatList } from 'react-native'
import PostItem from '../../component/PostItem'

const UserScreen = ({ route }) => {
  const tabnews = new TabNews()
  const { user } = route.params
  console.log(user)
  const [postsAndComments, setPostsAndComments] = useState([])
  tabnews.getPostsFromUser(user, 1)
    .then(data => setPostsAndComments(data))
    .catch(err => console.error(err))
  return (
    <View>
      <Text>{user}</Text>
      <View>
        <FlatList
          data={postsAndComments}
          renderItem={PostItem}
        />
      </View>
    </View>
  )
}
UserScreen.propTypes = {
  route: PropTypes.object.isRequired
}

export default memo(UserScreen)
