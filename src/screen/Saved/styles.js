import { StyleSheet } from 'react-native'
import { colors } from '../../colors'

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  noItems: {
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    text: {
      color: colors.text
    }
  },
  item: {
    container: {
      margin: 6
    },
    title: {
      fontSize: 16,
      fontWeight: '500',
      color: colors.text
    },
    owner: {
      color: colors.text
    }
  }
})

export default styles
