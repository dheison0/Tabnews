import { Component } from 'react';
import { ToastAndroid, View } from 'react-native';
import { findStrategyInformationsByValue, errorHandler, TabNews } from '../../libs/tabnews';
import { prepareData } from './utils';
import { StrategyChooser, StrategyChooserHeaderButton } from './StrategyChooser';
import LoadingIndicator from '../../component/LoadingIndicator';
import PostList from './PostList';
import Error from '../../component/Error';


class HomeScreen extends Component {
  tabnews = new TabNews()
  defaultState = {
    data: [],
    page: 1,
    loading: false,
    endOfResults: false,
    error: null,
    strategyChooserVisible: false,
    ordenationStrategy: 'relevant'
  }

  constructor(props) {
    super(props);
    this.state = { ...this.defaultState };
    this.props.navigation.setOptions({
      title: "Postagens",
      headerRight: () => (
        <StrategyChooserHeaderButton
          onPress={() => this.toggleStrategyChooser()}
        />
      )
    });
  }

  componentDidMount() {
    this.loadContent();
  }

  toggleStrategyChooser() {
    this.setState({ strategyChooserVisible: !this.state.strategyChooserVisible })
  }

  reload() {
    this.setState(
      {
        ...this.defaultState,
        ordenationStrategy: this.state.ordenationStrategy
      },
      this.loadContent
    )
  }

  loadContent() {
    if (this.state.loading || this.state.endOfResults) return;

    const onResponse = newData => {
      if (newData.length === 0) {
        if (this.state.data.length == 0) {
          const ordenation = findStrategyInformationsByValue(this.state.ordenationStrategy).title;
          const page = this.state.page;
          return this.setState({
            error: `Por um motivo desconhecido a API retornou a página ${page} da ordenação por ${ordenation} como estando limpa.`,
            loading: false
          });
        }
        return this.setState({ loading: false, endOfResults: true });
      }
      this.setState({
        data: [...this.state.data, ...newData.map(prepareData)],
        page: this.state.page + 1,
        loading: false
      });
    }

    const onError = err => {
      let newState = { loading: false };
      const errorMessage = errorHandler(err)
      if (this.state.data.length === 0) {
        newState['error'] = errorMessage;
      } else {
        ToastAndroid.show(errorMessage, ToastAndroid.LONG);
      }
      this.setState(newState);
    }

    this.setState(
      { loading: true },
      () => this.tabnews.getContents(this.state.page, this.state.ordenationStrategy)
        .then(onResponse).catch(onError)
    );
  }

  render() {
    const onStrategyChoose = (value) => {
      this.setState({ ordenationStrategy: value }, this.reload);
    };
    return (
      <View style={{ flex: 1 }}>
        <StrategyChooser
          visible={this.state.strategyChooserVisible}
          onRequestClose={() => this.toggleStrategyChooser()}
          onChoose={onStrategyChoose}
        />
        {this.state.data.length > 0 ? (
          <PostList
            data={this.state.data}
            endOfResults={this.state.endOfResults}
            loadMore={() => this.loadContent()}
            navigation={this.props.navigation}
            reload={() => this.reload()}
          />
        ) : (this.state.error ? (
          <Error
            message={this.state.error}
            onRetry={() => this.reload()}
          />
        ) : (
          <LoadingIndicator />
        ))}
      </View>
    );
  }
}


export default HomeScreen;