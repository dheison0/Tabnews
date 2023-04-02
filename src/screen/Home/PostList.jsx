import { memo } from 'react'
import { FlatList } from 'react-native'
import PostItem from './PostItem'
import LoadingIndicator from '../../component/LoadingIndicator'
import PropTypes from 'prop-types'

const PostList = ({ data, navigation, loadMore, reload, endOfResults = false }) => {
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
PostList.propTypes = {
  data: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired,
  loadMore: PropTypes.func,
  reload: PropTypes.func,
  endOfResults: PropTypes.bool
}

export default memo(PostList)
