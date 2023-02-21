import { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import { TabNews } from '../../../utils/tabnews';
import LoadingIndicator from '../../component/LoadingIndicator';
import PostList from './PostList';
import { prepareData } from './utils';


class HomeScreen extends Component {
  tabnews = new TabNews()
  defaultState = {
    data: [],
    page: 1,
    loading: false,
    error: null,
    endReached: false
  }

  constructor(props) {
    super(props);
    this.state = { ...this.defaultState };
  }

  componentDidMount() {
    this.loadContent();
  }

  loadContent() {
    if (this.state.loading) return;
    this.setState(
      { loading: true },
      () => this.tabnews.getContents(this.state.page, 'relevant')
        .then(newData => this.setState({
          data: [...this.state.data, ...newData.map(prepareData)],
          page: this.state.page + 1,
          loading: false
        }))
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.state.data.length > 0 ? (
          <PostList
            data={this.state.data}
            endReached={this.state.endReached}
            loadMore={() => this.loadContent()}
            navigation={this.props.navigation}
          />
        ) : (
          <LoadingIndicator />
        )}
      </View>
    );
  }
}


export default HomeScreen;