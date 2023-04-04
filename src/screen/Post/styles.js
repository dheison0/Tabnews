import { StyleSheet } from 'react-native'
import { theme } from '../../colors'

const styles = StyleSheet.create({
  main: {
    body: {
      flex: 1,
      padding: 8
    },
    header: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 10
    },
    headerItem: {
      margin: 3
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
  noComments: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  markdownRenderer: {
    body: {
      color: theme.colors.text,
      backgroundColor: theme.colors.background,
      padding: 6
    },
    code_inline: {
      backgroundColor: theme.colors.notification
    },
    fence: {
      borderColor: theme.colors.border,
      backgroundColor: theme.colors.border
    }
  }
})

export default styles
