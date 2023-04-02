import { Component } from 'react'
import { ToastAndroid, View } from 'react-native'
import { findStrategyInformationByValue, errorHandler, TabNews } from '../../libs/tabnews'
import { prepareData } from './utils'
import { StrategyChooser, StrategyChooserHeaderButton } from './StrategyChooser'
import LoadingIndicator from '../../component/LoadingIndicator'
import PostList from './PostList'
import Error from '../../component/Error'
import PropTypes from 'prop-types'

class HomeScreen extends Component {
  tabnews = new TabNews()
  defaultState = {
    data: [],
    page: 1,
    loading: false,
    endOfResults: false,
    error: null,
    strategyChooserVisible: false,
    ordinationStrategy: 'relevant'
  }

  constructor (props) {
    super(props)
    this.state = { ...this.defaultState }
    this.props.navigation.setOptions({
      headerRight: () => (
        <StrategyChooserHeaderButton
          onPress={() => this.toggleStrategyChooser()}
        />
      )
    })
  }

  componentDidMount () {
    this.loadContent()
  }

  toggleStrategyChooser () {
    this.setState({ strategyChooserVisible: !this.state.strategyChooserVisible })
  }

  reload () {
    this.setState(
      {
        ...this.defaultState,
        ordinationStrategy: this.state.ordinationStrategy
      },
      this.loadContent
    )
  }

  loadContent () {
    if (this.state.loading || this.state.endOfResults) return

    const onResponse = newData => {
      if (newData.length === 0) {
        if (this.state.data.length === 0) {
          const ordination = findStrategyInformationByValue(this.state.ordinationStrategy).title
          const page = this.state.page
          return this.setState({
            error: `Por um motivo desconhecido a API retornou a página ${page} da ordenação por ${ordination} como estando limpa.`,
            loading: false
          })
        }
        return this.setState({ loading: false, endOfResults: true })
      }
      this.setState({
        data: [...this.state.data, ...newData.map(prepareData)],
        page: this.state.page + 1,
        loading: false
      })
    }

    const onError = err => {
      const newState = { loading: false }
      const errorMessage = errorHandler(err)
      if (this.state.data.length === 0) {
        newState.error = errorMessage
      } else {
        ToastAndroid.show(errorMessage, ToastAndroid.LONG)
      }
      this.setState(newState)
    }

    this.setState(
      { loading: true },
      () => this.tabnews.getContents(this.state.page, this.state.ordinationStrategy)
        .then(onResponse).catch(onError)
    )
  }

  render () {
    const onStrategyChoose = (value) => {
      this.setState({ ordinationStrategy: value }, this.reload)
    }
    return (
      <View style={{ flex: 1 }}>
        <StrategyChooser
          visible={this.state.strategyChooserVisible}
          onRequestClose={() => this.toggleStrategyChooser()}
          onChoose={onStrategyChoose}
        />
        {this.state.data.length > 0
          ? (
            <PostList
              data={this.state.data}
              endOfResults={this.state.endOfResults}
              loadMore={() => this.loadContent()}
              navigation={this.props.navigation}
              reload={() => this.reload()}
            />
            )
          : (this.state.error
              ? (
              <Error
                message={this.state.error}
                onRetry={() => this.reload()}
              />
                )
              : (
              <LoadingIndicator />
                ))}
      </View>
    )
  }
}
HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default HomeScreen
