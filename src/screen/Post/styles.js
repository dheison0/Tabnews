import { StyleSheet } from 'react-native'
import { theme } from '../../colors'

const styles = StyleSheet.create({
  main: {
    body: {
      flex: 1,
      padding: 8
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 10,
      color: theme.colors.text
    },
    commentsTitle: {
      paddingTop: 4,
      borderTopWidth: 2,
      borderTopColor: '#444',
      marginVertical: 8,
      fontSize: 18,
      color: theme.colors.text
    }
  },
  comment: {
    container: {
      margin: 6,
      padding: 4,
      borderWidth: 2,
      borderRadius: 6,
      borderColor: theme.colors.border
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    headerText: {
      color: theme.colors.primary
    }
  },
  markdownRenderer: {
    body: {
      color: theme.colors.text,
      padding: 6
    }
  }
})

export default styles
