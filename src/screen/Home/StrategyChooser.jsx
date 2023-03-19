import { memo } from 'react'
import { homepageStrategies } from '../../libs/tabnews'
import { Modal, Text, View, Pressable, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export const StrategyChooserHeaderButton = ({ onPress }) => (
  <Pressable onPress={onPress} style={[styles.centeredView, styles.headerButton]}>
    <Ionicons size={20} name='md-filter' />
  </Pressable>
)

export const StrategyChooser = memo(({ visible, onRequestClose, onChoose }) => (
  <Modal
    animationType='slide'
    transparent={true}
    visible={visible}
    onRequestClose={onRequestClose}
  >
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.title}>Ordenar por:</Text>
        <View style={styles.optionsBox}>
          {homepageStrategies.map((strategy, index) => (
            <Pressable
              key={index}
              style={[styles.button, styles.optionButton]}
              onPress={() => onChoose(strategy.value)}
            >
              <Text style={styles.buttonText}>{strategy.title}</Text>
            </Pressable>
          ))}
        </View>
        <Pressable
          style={[styles.button, styles.cancelButton]}
          onPress={onRequestClose}
        >
          <Text style={styles.buttonText}>Cancelar</Text>
        </Pressable>
      </View>
    </View>
  </Modal>
))

const styles = StyleSheet.create({
  headerButton: {
    margin: 8,
  },
  centeredView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
  },
  title: {
    fontSize: 18,
    marginBottom: 8
  },
  optionsBox: {
    marginHorizontal: 25,
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
    marginHorizontal: 20,
  },
  optionButton: {
    backgroundColor: '#99e'
  },
  cancelButton: {
    backgroundColor: '#c52'
  }
})
