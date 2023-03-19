import { memo } from 'react'
import { FlatList } from 'react-native'
import PostItem from './PostItem'
import LoadingIndicator from '../../component/LoadingIndicator'


function PostList({ data, loadMore, reload, endOfResults, navigation }) {
  const renderItem = ({ item }) => (
    <PostItem
      post={item}
      navigation={navigation}
    />
  )
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      onEndReached={loadMore}
      onRefresh={reload}
      refreshing={false}
      ListFooterComponent={() => (
        <>{endOfResults ? null : <LoadingIndicator footer={true} />}</>
      )}
    />
  )
}


export default memo(PostList)