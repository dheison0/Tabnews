import { PureComponent } from 'react'
import { ToastAndroid, View, Text } from 'react-native'
import LoadingIndicator from '../../component/LoadingIndicator'
import { errorHandler, TabNews } from '../../libs/tabnews'
import Comment from './Comment'
import PropTypes from 'prop-types'
import { theme } from '../../colors'

const NoComments = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={{ color: theme.colors.text }}>Sem comentários ainda :)</Text>
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
    return (
      <View>
        {this.state.loading
          ? (
            <LoadingIndicator
              footer={true}
              message="Carregando comentários..."
            />
            )
          : this.state.comments.length > 0
            ? this.state.comments.map((item, index) => <Comment key={index} item={item} />)
            : (<NoComments />)}
      </View>
    )
  }
}
CommentsContainer.propTypes = {
  post: PropTypes.object.isRequired
}

export default CommentsContainer
