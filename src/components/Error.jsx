import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Error = ({message, retryPress}) => (
  <View style={style.root}>
    <Ionicons name="md-warning-outline" size={86} />
    <Text>{message}</Text>
    <Pressable onPress={retryPress} style={style.retryButton}>
      <Text style={style.retryText}>Tentar novamente</Text>
    </Pressable>
  </View>
);

const style = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  retryButton: {
    marginTop: 12,
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 6
  },
  retryText: {
    color: '#fff'
  }
});

export default Error;