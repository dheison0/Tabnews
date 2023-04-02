import { memo } from 'react'
import { homepageStrategies } from '../../libs/tabnews'
import { Modal, Text, View, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '../../colors'
import styles from './styles'
import PropTypes from 'prop-types'

export const StrategyChooserHeaderButton = ({ onPress }) => (
  <Pressable onPress={onPress} style={[styles.strategyChooser.centeredView, styles.strategyChooser.headerButton]}>
    <Ionicons size={20} name='md-filter' color={theme.colors.primary} />
  </Pressable>
)
StrategyChooserHeaderButton.propTypes = {
  onPress: PropTypes.func.isRequired
}

const RawStrategyChooser = ({ visible, onRequestClose, onChoose }) => (
  <Modal
    animationType='slide'
    transparent={true}
    visible={visible}
    onRequestClose={onRequestClose}
  >
    <View style={styles.strategyChooser.centeredView}>
      <View style={styles.strategyChooser.modalView}>
        <Text style={styles.strategyChooser.title}>Ordenar por:</Text>
        <View style={styles.strategyChooser.optionsBox}>
          {homepageStrategies.map((strategy, index) => (
            <Pressable
              key={index}
              style={[styles.strategyChooser.button, styles.strategyChooser.optionButton]}
              onPress={() => onChoose(strategy.value)}
            >
              <Text style={styles.strategyChooser.buttonText}>{strategy.title}</Text>
            </Pressable>
          ))}
        </View>
        <Pressable
          style={[styles.strategyChooser.button, styles.strategyChooser.cancelButton]}
          onPress={onRequestClose}
        >
          <Text style={styles.strategyChooser.buttonText}>Cancelar</Text>
        </Pressable>
      </View>
    </View>
  </Modal>
)
RawStrategyChooser.propTypes = {
  visible: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  onChoose: PropTypes.func
}

export const StrategyChooser = memo(RawStrategyChooser)
