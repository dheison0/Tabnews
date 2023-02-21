import { Component } from 'react';
import { View } from 'react-native';
import { TabNews } from '../../libs/tabnews';
import LoadingIndicator from '../../component/LoadingIndicator';
import PostList from './PostList';
import { prepareData } from './utils';


class HomeScreen extends Component {
  tabnews = new TabNews()
  defaultState = {
    data: [],
    page: 1,
    loading: false,
    endOfResults: false,
    error: null,
  }

  constructor(props) {
    super(props);
    this.state = { ...this.defaultState };
  }

  componentDidMount() {
    this.loadContent();
  }

  reload() {
    this.setState({ ...this.defaultState }, this.loadContent)
  }

  loadContent() {
    if (this.state.loading || this.state.endOfResults) return;
    this.setState(
      { loading: true },
      () => this.tabnews.getContents(this.state.page, 'relevant')
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
    return (
      <View style={{ flex: 1 }}>
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