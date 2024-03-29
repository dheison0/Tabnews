import { PureComponent } from 'react'
import { ToastAndroid, View, Text } from 'react-native'
import { errorHandler, TabNews } from '../../libs/tabnews'
import { colors } from '../../colors'
import styles from './styles'
import LoadingIndicator from '../../component/LoadingIndicator'
import Comment from './Comment'
import PropTypes from 'prop-types'

const NoComments = () => (
  <View style={styles.noComments}>
    <Text style={{ color: colors.text }}>Sem comentários ainda :)</Text>
  </View>
)

class CommentsContainer extends PureComponent {
  tabnews = new TabNews()
  state = {
    loading: true,
    comments: []
  }

  componentDidMount () {
    this.tabnews.getComments(this.props.post.owner, this.props.post.slug)
      .then(data => this.setState({ comments: data, loading: false }))
      .catch(err => {
        ToastAndroid.show(errorHandler(err), ToastAndroid.LONG)
        this.setState({ loading: false })
      })
  }

  render () {
    const loading = () => <LoadingIndicator message="Carregando comentários..." footer={true} />
    const renderItems = () => this.state.comments.map((item, index) => (
      <Comment
        key={index}
        item={item}
        onPress={() => this.props.navigation.push('Post', {
          post: {
            owner: item.owner_username,
            slug: item.slug
          }
        })}
      />
    ))
    return (
      <View>
        {this.state.loading
          ? loading()
          : this.state.comments.length > 0
            ? renderItems()
            : NoComments()
        }
      </View>
    )
  }
}
CommentsContainer.propTypes = {
  post: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
}

export default CommentsContainer
