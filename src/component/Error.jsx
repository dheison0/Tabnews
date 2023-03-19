import { View, Text, Button, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const Error = ({ message, onRetry }) => (
  <View style={styles.container}>
    <Ionicons name='md-warning' size={128} />
    <Text style={styles.message}>{message}</Text>
    {onRetry ? <Button onPress={onRetry} title="Tentar novamente" /> : null}
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  message: {
    fontWeight: '500',
    textAlign: 'center',
    maxWidth: '75%',
    marginBottom: 15
  }
})

export default Error