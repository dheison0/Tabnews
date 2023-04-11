import { StyleSheet } from 'react-native'
import { theme } from '../../colors'

const styles = StyleSheet.create({
  postItem: {
    container: {
      margin: 6
    },
    title: {
      fontSize: 16,
      fontWeight: '500',
      color: theme.colors.text
    },
    information: {
      flex: 1,
      flexDirection: 'row',
      marginTop: 3
    }
  },
  strategyChooser: {
    headerButton: {
      margin: 8
    },
    centeredView: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    modalView: {
      backgroundColor: theme.custom.strategyChooser.background,
      borderRadius: 15,
      padding: 20,
      alignItems: 'center',
      elevation: 8
    },
    title: {
      fontSize: 18,
      marginBottom: 8,
      color: theme.colors.text
    },
    optionsBox: {
      marginHorizontal: 25
    },
    button: {
      margin: 2,
      borderRadius: 4,
      alignItems: 'center',
      elevation: 5
    },
    buttonText: {
      color: theme.custom.strategyChooser.buttonText,
      marginVertical: 10,
      marginHorizontal: 20
    },
    optionButton: {
      backgroundColor: theme.colors.border
    },
    cancelButton: {
      backgroundColor: theme.colors.notification
    }
  }
})

export default styles
