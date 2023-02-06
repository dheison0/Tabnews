import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const ArticleItem = ({ item, onPress }) => (
  <TouchableOpacity style={style.articleContainer} onPress={onPress}>
    <Text style={style.title}>{item.title}</Text>
    <View style={style.informationsContainer}>
      <Text style={{ flex: 1, textAlign: "left" }}>{item.owner}</Text>
      <Text style={{ flex: 1, textAlign: "center" }}>{item.tabcoins} tabcoins</Text>
      <Text style={{ flex: 1, textAlign: "right" }}>{item.published}</Text>
    </View>
  </TouchableOpacity>
);

const style = StyleSheet.create({
  articleContainer: {
    flexDirection: 'column',
    margin: 8,
    borderRadius: 10,
    padding: 6
  },
  informationsContainer: {
    flexDirection: 'row',
    marginTop: 4
  },
  title: {
    fontSize: 16,
    fontWeight: "bold"
  }
});

export default ArticleItem;