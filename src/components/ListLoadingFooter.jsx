import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

const ListLoadingFooter = () => (
  <View style={style.container}>
    <ActivityIndicator size="large" />
    <Text>Carregando mais...</Text>
  </View>
);

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8
  }
});

export default ListLoadingFooter;