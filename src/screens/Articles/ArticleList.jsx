import { Component } from "react";
import { FlatList } from "react-native";
import ArticleItem from "./ArticleItem";
import ListLoadingFooter from "../../components/ListLoadingFooter";

class ArticleList extends Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps) {
    return nextProps !== this.props;
  }
  render() {
    const ITEM_HEIGHT = 64;
    const getItemLayout = (data, index) => ({
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * data.length,
      index
    });
    const keyExtractor = (item) => item.id;
    return (
      <FlatList
        renderItem={ArticleItem}
        data={this.props.articles}
        refreshing={false}
        getItemLayout={getItemLayout}
        onEndReachedThreshold={0.5}
        onRefresh={this.props.onReload}
        onEndReached={this.props.loadMore}
        keyExtractor={keyExtractor}
        ListFooterComponent={() => (
          <>
            {this.props.showFooter ? (
              <ListLoadingFooter />
            ) : null}
          </>
        )}
      />
    );
  }
}

export default ArticleList;