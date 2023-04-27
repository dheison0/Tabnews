import { StyleSheet } from 'react-native'
import { colors } from '../../colors'

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    textAlign: 'center',
    color: colors.text,
    padding: 15
  },
  categoryButton: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    backgroundColor: colors.background,
    borderRadius: 6,
    margin: 6
  },
  categoryButtonText: {
    color: colors.text
  },
  actualCategory: {
    backgroundColor: colors.border
  }
})

export default styles
