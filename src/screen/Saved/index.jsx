import { useState } from 'react'
import { View, Text } from 'react-native'
import { getBookmarks } from '../../libs/storage'
import LoadingIndicator from '../../component/LoadingIndicator'
import Item from './Item'
import styles from './styles'
import Error from '../../component/Error'
import PropTypes from 'prop-types'

const NoItems = () => (
  <View style={styles.noItems.container}>
    <Text style={styles.noItems.text}>Sem items :)</Text>
  </View>
)

const SavedScreen = ({ navigation }) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
    error: null
  })
  getBookmarks()
    .then((data) => {
      const sortedData = data.sort((a, b) => b.addedAt - a.addedAt)
      setState({ data: sortedData, loading: false })
    })
    .catch(() => setState({
      loading: false,
      error: 'Falha ao carregar items salvos!'
    }))
  const loading = () => <LoadingIndicator />
  const renderError = () => <Error message={state.error} />
  const renderItems = () => state.data.map((post, index) => {
    if (!post) return undefined
    return (<Item key={index} post={post} navigation={navigation} />)
  })
  return (
    <View style={styles.root}>
      {state.loading
        ? loading()
        : state.error
          ? renderError()
          : state.data.length > 0
            ? renderItems()
            : NoItems()
      }
    </View>
  )
}
SavedScreen.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default SavedScreen
