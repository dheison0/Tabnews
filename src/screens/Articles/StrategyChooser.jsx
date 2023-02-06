import { View, Modal, Text, Pressable, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { modalStyles, sharedStyles } from "./styles";

const StrategyChooser = ({ onChoose, onClosePress, visible, options }) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={visible}
    onRequestClose={onClosePress}
  >
    <View style={sharedStyles.centeredView}>
      <View style={modalStyles.modalView}>
        <Text style={modalStyles.modalText}>Escolha a ordem dos items:</Text>
        {options.map((option, index) => (
          <Pressable
            key={index}
            style={[modalStyles.button, modalStyles.optionButton]}
            onPress={() => onChoose(option.value)}
          >
            <Text style={modalStyles.buttonText}>{option.title}</Text>
          </Pressable>
        ))}
        <Pressable onPress={onClosePress} style={[modalStyles.button, modalStyles.cancelButton]}>
          <Text style={modalStyles.buttonText}>Cancelar</Text>
        </Pressable>
      </View>
    </View>
  </Modal>
)

const StrategyChooserButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Ionicons name="md-filter" size={20} />
  </TouchableOpacity>
);

export { StrategyChooser, StrategyChooserButton };