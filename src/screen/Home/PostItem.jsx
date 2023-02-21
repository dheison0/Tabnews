import { View, Text, TouchableOpacity } from 'react-native';

const textPosition = (p) => ({ flex: 1, textAlign: p });

const PostItem = ({ post, navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate('Post', { post })}>
    <View style={{ margin: 6 }}>
      <Text style={{ fontSize: 15 }}>{post.title}</Text>
      <View style={{ flex: 1, flexDirection: 'row', marginTop: 3 }}>
        <Text style={textPosition("left")}>{post.owner}</Text>
        <Text style={textPosition("center")}>{post.tabcoins} tabcoins</Text>
        <Text style={textPosition("right")}>{post.time}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default PostItem;