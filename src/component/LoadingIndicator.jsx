import { memo } from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import { colors } from '../colors'
import PropTypes from 'prop-types'

const FOOTER_SIZE = 36
const NORMAL_SIZE = 56

const LoadingIndicator = ({ footer = false, message = 'Carregando...' }) => (
  <View style={[styles.container, footer ? styles.footer : null]}>
    <ActivityIndicator
      style={styles.indicator}
      size={footer ? FOOTER_SIZE : NORMAL_SIZE}
      color={colors.primary}
    />
    <Text style={styles.message}>{message}</Text>
  </View>
)
LoadingIndicator.propTypes = {
  footer: PropTypes.bool,
  message: PropTypes.string
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  footer: {
    flexDirection: 'row',
    padding: 8
  },
  indicator: {
    margin: 8
  },
  message: {
    fontSize: 16,
    color: colors.text
  }
})

export default memo(LoadingIndicator)
