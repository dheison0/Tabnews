import { StyleSheet } from 'react-native'
import { colors } from '../../colors'

const styles = StyleSheet.create({
  postItem: {
    container: {
      margin: 6
    },
    title: {
      fontSize: 16,
      fontWeight: '500',
      color: colors.text
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
      backgroundColor: colors.border,
      borderRadius: 15,
      padding: 20,
      alignItems: 'center',
      elevation: 8
    },
    title: {
      fontSize: 18,
      marginBottom: 8,
      color: colors.text
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
      color: colors.text,
      marginVertical: 10,
      marginHorizontal: 20
    },
    optionButton: {
      backgroundColor: colors.primary
    },
    cancelButton: {
      backgroundColor: colors.notification
    }
  }
})

export default styles
