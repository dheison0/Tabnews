import { Component } from 'react';
import { FlatList } from 'react-native';
import PostItem from './PostItem';


class PostList extends Component {
  shouldComponentUpdate(nextProps) {
    return true; // nextProps !== this.props;
  }
  render() {
    return (
      <FlatList
        data={this.props.data}
        renderItem={({ item }) => <PostItem post={item} navigation={this.props.navigation} />}
      />
    );
  }
}

export default PostList;