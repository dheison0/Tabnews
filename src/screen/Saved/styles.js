import { StyleSheet } from 'react-native'
import { theme } from '../../colors'

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
      color: theme.colors.text
    }
  },
  item: {
    container: {
      margin: 6
    },
    title: {
      fontSize: 16,
      fontWeight: '500',
      color: theme.colors.text
    },
    owner: {
      color: theme.colors.text
    }
  }
})

export default styles
