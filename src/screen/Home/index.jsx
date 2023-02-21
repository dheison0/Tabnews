import { Component } from 'react';
import { View } from 'react-native';
import { TabNews } from '../../libs/tabnews';
import { prepareData } from './utils';
import { StrategyChooser, StrategyChooserHeaderButton } from './StrategyChooser';
import LoadingIndicator from '../../component/LoadingIndicator';
import PostList from './PostList';


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
    this.setState(
      { loading: true },
      () => this.tabnews.getContents(this.state.page, this.state.ordenationStrategy)
        .then(newData => {
          if (newData.length === 0) {
            this.setState({ loading: false, endOfResults: true });
          } else {
            this.setState({
              data: [...this.state.data, ...newData.map(prepareData)],
              page: this.state.page + 1,
              loading: false
            })
          }
        })
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
        ) : (
          <LoadingIndicator />
        )}
      </View>
    );
  }
}


export default HomeScreen;