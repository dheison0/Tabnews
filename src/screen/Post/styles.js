import { StyleSheet } from 'react-native'
import { colors } from '../../colors'

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
      color: colors.text
    },
    commentsTitle: {
      paddingTop: 4,
      borderTopWidth: 2,
      borderTopColor: colors.border,
      marginVertical: 8,
      fontSize: 18,
      color: colors.text
    }
  },
  comment: {
    container: {
      margin: 6,
      padding: 4,
      borderWidth: 2,
      borderRadius: 6,
      borderColor: colors.border
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    headerText: {
      color: colors.primary
    }
  },
  noComments: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  markdownRenderer: {
    body: {
      color: colors.text,
      backgroundColor: colors.background,
      padding: 6
    },
    code_inline: {
      backgroundColor: colors.notification
    },
    fence: {
      borderColor: colors.border,
      backgroundColor: colors.border
    }
  }
})

export default styles
