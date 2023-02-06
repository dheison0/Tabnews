import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const Loading = () => (
  <View style={style.center}>
    <ActivityIndicator size={56} style={{marginBottom: 10}} color={"#aae"} />
    <Text>Carregando...</Text>
  </View>
);

const style = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Loading;