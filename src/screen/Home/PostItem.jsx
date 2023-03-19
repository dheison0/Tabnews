import { memo } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const PostItem = ({ post, navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate("Post", { post })}>
    <View style={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
      <View style={styles.information}>
        <Text style={{ flex: 1, textAlign: "left" }}>{post.owner}</Text>
        <Text style={{ flex: 1, textAlign: "center" }}>{post.tabcoins} tabcoins</Text>
        <Text style={{ flex: 1, textAlign: "right" }}>{post.time}</Text>
      </View>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    margin: 6
  },
  title: {
    fontSize: 16,
    fontWeight: "500"
  },
  information: {
    flex: 1,
    flexDirection: "row",
    marginTop: 3
  }
})

export default memo(PostItem)