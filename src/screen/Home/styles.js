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
      backgroundColor: 'white',
      borderRadius: 15,
      padding: 20,
      alignItems: 'center',
      elevation: 5
    },
    title: {
      fontSize: 18,
      marginBottom: 8
    },
    optionsBox: {
      marginHorizontal: 25
    },
    button: {
      margin: 2,
      borderRadius: 4,
      alignItems: 'center',
      elevation: 4
    },
    buttonText: {
      color: '#fff',
      marginVertical: 10,
      marginHorizontal: 20
    },
    optionButton: {
      backgroundColor: '#99e'
    },
    cancelButton: {
      backgroundColor: '#c52'
    }
  }
})

export default styles
