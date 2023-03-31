import { PureComponent } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { markdownFixer } from '../../libs/markdownFixer'
import { errorHandler, TabNews } from '../../libs/tabnews'
import Error from '../../component/Error'
import LoadingIndicator from '../../component/LoadingIndicator'
import Markdown from 'react-native-markdown-display'
import CommentsContainer from './CommentsContainer'
import PropTypes from 'prop-types'
import styles from './styles'

class PostScreen extends PureComponent {
  tabnews = new TabNews()
  state = {
    loading: true,
    error: null,
    postComponent: null
  }

  componentDidMount () {
    this.loadData()
  }

  reload () {
    this.setState({ loading: true }, this.loadData)
  }

  loadData () {
    const { post } = this.props.route.params
    this.tabnews.getPost(post.owner, post.slug)
      .then(data => this.processMarkdown(data))
      .catch(err => this.setState({ loading: false, error: errorHandler(err) }))
  }

  processMarkdown (post) {
    this.setState({
      postComponent: (
        <ScrollView>
          <Text style={styles.main.title}>{post.title}</Text>
          <Markdown style={styles.markdownRenderer}>
            {markdownFixer(post.body)}
          </Markdown>
          <Text style={styles.main.commentsTitle}>Comentários:</Text>
          <CommentsContainer
            post={{ owner: post.owner_username, slug: post.slug }}
          />
        </ScrollView>
      ),
      loading: false
    })
  }

  render () {
    return (
      <View style={styles.main.body}>
        {this.state.postComponent ?? (
          this.state.error
            ? (
              <Error message={this.state.error} onRetry={() => this.reload()} />
              )
            : (
              <LoadingIndicator />
              )
        )}
      </View>
    )
  }
}
PostScreen.propTypes = {
  route: PropTypes.object.isRequired
}

export default PostScreen
