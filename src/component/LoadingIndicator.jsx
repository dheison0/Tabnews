import { memo } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';


const INDICATOR_FOOTER_SIZE = 36;
const INDICATOR_NORMAL_SIZE = 56;


const LoadingIndicator = ({ footer, message }) => (
  <View style={[styles.container, footer ? styles.footer : null]}>
    <ActivityIndicator
      style={styles.indicator}
      size={footer ? INDICATOR_FOOTER_SIZE : INDICATOR_NORMAL_SIZE}
      color="black"
    />
    <Text style={styles.message}>{message || "Carregando..."}</Text>
  </View>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    flexDirection: 'row',
    padding: 8
  },
  indicator: {
    margin: 8
  },
  message: {
    fontSize: 16
  }
});


export default memo(LoadingIndicator);