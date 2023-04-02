import { useState } from 'react'
import { View, Text } from 'react-native'
import { getBookmarks } from '../../libs/storage'
import LoadingIndicator from '../../component/LoadingIndicator'
import Item from './Item'
import styles from './styles'
import Error from '../../component/Error'

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
  return (
    <View style={styles.root}>
      {state.loading
        ? <LoadingIndicator />
        : (state.error
            ? (<Error message={state.error} />)
            : (state.data.length > 0
                ? (
                    state.data.map((v, i) => (<Item key={i} post={v} navigation={navigation} />))
                  )
                : <NoItems />
              )
          )}
    </View>
  )
}

export default SavedScreen
