import { PureComponent } from 'react'
import { ITEMS_PER_PAGE, TabNews } from '../../libs/tabnews'
import PropTypes from 'prop-types'
import styles from './styles'
import { View, Text, FlatList, Pressable } from 'react-native'
import PostItem from '../../component/PostItem'
import LoadingIndicator from '../../component/LoadingIndicator'
import { theme } from '../../colors'

class UserScreen extends PureComponent {
  tabnews = new TabNews()
  state = {
    posts: [],
    comments: [],
    loadMore: true,
    page: 1,
    isPostsCategory: true
  }

  componentDidMount () {
    this.load()
  }

  load () {
    const processData = (data) => {
      const newPosts = data.filter(v => v.parent_id === null)
      const newComments = data.filter(v => v.parent_id !== null)
      this.setState({
        posts: [...this.state.posts, ...newPosts],
        comments: [...this.state.comments, ...newComments],
        loadMore: data.length === ITEMS_PER_PAGE,
        page: this.state.page + 1
      })
    }
    this.tabnews.getPostsFromUser(this.props.route.params.user, this.state.page)
      .then(processData)
      .catch(err => console.error(err))
  }

  render () {
    const Header = () => (
      <View>
        <Text style={styles.title}>@{this.props.route.params.user}</Text>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Pressable
            style={[styles.categoryButton, this.state.isPostsCategory ? styles.actualCategory : {}]}
            onPress={() => this.setState({ isPostsCategory: true })}>
            <Text style={styles.categoryButtonText}>Postagens</Text>
          </Pressable>
          <Pressable
            style={[styles.categoryButton, !this.state.isPostsCategory ? styles.actualCategory : {}]}
            onPress={() => this.setState({ isPostsCategory: false })}>
            <Text style={styles.categoryButtonText}>Comentários</Text>
          </Pressable>
        </View>
      </View>
    )
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.isPostsCategory ? this.state.posts : this.state.comments}
          renderItem={({ item }) => (
            <PostItem
              post={item}
              navigation={this.props.navigation}
            />
          )}
          onEndReached={() => this.load()}
          ListHeaderComponent={Header}
          ListFooterComponent={() => (
            <>{this.state.loadMore ? <LoadingIndicator footer={true} /> : null}</>
          )}
        />
      </View>
    )
  }
}
UserScreen.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
}

export default UserScreen
