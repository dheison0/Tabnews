import { Appearance } from 'react-native'

const dark = {
  background: '#282a36',
  border: '#44475a',
  text: '#f8f8f2',
  highlightText: '#6272a4',
  notification: '#ff5555',
  primary: '#8be9fd',
  information: '#fff'
}

const light = {
  background: '#ffffff',
  border: '#d8d8d8',
  text: '#1c1c1e',
  highlightText: '#9090ff',
  notification: '#ff3b30',
  primary: '#007aff',
  information: '#1f1f1f'
}

export const colorScheme = Appearance.getColorScheme()
export const statusBarScheme = colorScheme === 'dark' ? 'light' : 'dark'
export const colors = colorScheme === 'dark' ? dark : light

export const navigatorTheme = {
  dark: colorScheme === 'dark',
  colors: {
    primary: colors.primary,
    background: colors.background,
    card: colors.background,
    text: colors.text,
    border: colors.border,
    notification: colors.notification
  }
}
