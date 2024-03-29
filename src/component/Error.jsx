import { memo } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { colors } from '../colors'
import PropTypes from 'prop-types'

const Error = ({ message, onRetry }) => (
  <View style={styles.container}>
    <Ionicons name='md-warning' size={128} color={colors.notification} />
    <Text style={styles.message}>{message}</Text>
    {onRetry ? <Button onPress={onRetry} title="Tentar novamente" /> : null}
  </View>
)
Error.propTypes = {
  message: PropTypes.string.isRequired,
  onRetry: PropTypes.func
}

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
    marginBottom: 15,
    color: colors.text
  }
})

export default memo(Error)
