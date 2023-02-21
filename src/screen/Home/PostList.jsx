import { Component } from 'react';
import { FlatList } from 'react-native';
import PostItem from './PostItem';
import LoadingIndicator from '../../component/LoadingIndicator';


class PostList extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps !== this.props;
  }
  render() {
    const renderItem = ({ item }) => (
      <PostItem
        post={item}
        navigation={this.props.navigation}
      />
    );
    return (
      <FlatList
        data={this.props.data}
        renderItem={renderItem}
        onEndReached={this.props.loadMore}
        onRefresh={this.props.reload}
        refreshing={false}
        ListFooterComponent={() => (
          <>
            {this.props.endOfResults ? null :
              <LoadingIndicator footer={true} />
            }
          </>
        )}
      />
    );
  }
}


export default PostList;