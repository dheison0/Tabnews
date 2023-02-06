import { Component } from "react";
import { View, ToastAndroid } from "react-native";
import { mainStyles, sharedStyles } from "./styles";
import { getArticleList } from "../../utils";
import { errorHandler, prepareArticleData } from "./utils";
import { StrategyChooser, StrategyChooserButton } from "./StrategyChooser";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import ArticleList from "./ArticleList";

class Articles extends Component {
  defaultState = {
    loading: true,
    loadingMore: false,
    showListFooter: true,
    contentPage: 1,
    articles: [],
    strategy: 'relevant',
    showStrategyChooser: false,
    errorMessage: null
  }
  strategies = [
    { title: "Relevante", value: "relevant" },
    { title: "Recentes", value: "new" },
    { title: "Antigos", value: "old" }
  ]
  constructor(props) {
    super(props);
    this.state = { ...this.defaultState };
    this.props.navigation.setOptions({
      headerRight: () => (
        <StrategyChooserButton
          onPress={() => this.toggleStrategyChooser()}
        />
      )
    })
  }
  toggleStrategyChooser() {
    this.setState({ showStrategyChooser: !this.state.showStrategyChooser })
  }
  componentDidMount() {
    getArticleList(1, this.state.strategy)
      .catch(error => {
        const errorMessage = errorHandler(error);
        this.setState({ error: errorMessage, loading: false });
      })
      .then(response => this.setState({
        articles: response.map(prepareArticleData),
        contentPage: this.state.contentPage + 1,
        loading: false
      }));
  }
  loadMore() {
    if (this.state.loadingMore) return;
    this.setState(
      { loadingMore: true, showListFooter: true },
      async () => {
        let response;
        try {
          response = await getArticleList(this.state.contentPage, this.state.strategy)
        } catch (error) {
          const errorMessage = errorHandler(error);
          ToastAndroid.show(errorMessage, ToastAndroid.LONG);
          this.setState({ loadingMore: false, showListFooter: false });
          return;
        }
        this.setState({
          articles: [...this.state.articles, ...response.map(prepareArticleData)],
          contentPage: this.state.contentPage + 1,
          loadingMore: false
        });
      }
    );
  }
  reload() {
    const strategy = this.state.strategy;
    this.setState(
      { ...this.defaultState, strategy },
      () => this.componentDidMount()
    );
  }
  error() {
    return (
      <Error
        message={this.state.errorMessage}
        retryPress={() => this.reload()}
      />
    );
  }
  render() {
    function setStrategy(strategy) {
      this.setState(
        { ...this.defaultState, strategy: strategy },
        () => this.componentDidMount()
      );
    }
    return (
      <View style={[sharedStyles.centeredView, mainStyles.root]}>
        <StrategyChooser
          options={this.strategies}
          visible={this.state.showStrategyChooser}
          onClosePress={() => this.toggleStrategyChooser()}
          onChoose={setStrategy}
        />
        {this.state.loading ? (<Loading />) : (
          this.state.errorMessage ? this.error() : (
            <ArticleList
              articles={this.state.articles}
              onReload={() => this.reload()}
              loadMore={() => this.loadMore()}
              showFooter={this.state.showListFooter}
            />
          )
        )}
      </View>
    )
  }
}

export default Articles;