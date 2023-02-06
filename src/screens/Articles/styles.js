import { StyleSheet } from "react-native";

const sharedStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

const mainStyles = StyleSheet.create({
  root: {
    backgroundColor: '#fff'
  }
});

const modalStyles = StyleSheet.create({
  modalView: {
    padding: 20,
    borderRadius: 12,
    backgroundColor: 'white',
    shadowColor: '#000',
    elevation: 7,
  },
  modalText: {
    marginBottom: 10,
    fontSize: 20
  },
  button: {
    padding: 10,
    margin: 5,
    borderRadius: 6,
    elevation: 3,
  },
  optionButton: {
    backgroundColor: '#F194FF',
  },
  cancelButton: {
    backgroundColor: '#2196F3'
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center'
  }
});

export { modalStyles, mainStyles, sharedStyles };