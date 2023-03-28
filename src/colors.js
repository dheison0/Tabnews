import { Appearance } from 'react-native'

const dark = {
  dark: true,
  colors: {
    primary: '#8be9fd',
    background: '#282a36',
    card: '#282a36',
    text: '#f8f8f2',
    border: '#44475a',
    notification: '#ff5555'
  }
}

const light = {
  dark: false,
  colors: {
    primary: 'rgb(0, 122, 255)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(216, 216, 216)',
    notification: 'rgb(255, 59, 48)'
  }
}

export const colorScheme = Appearance.getColorScheme()
export const theme = colorScheme === 'dark' ? dark : light
export const statusBarScheme = colorScheme === 'dark' ? 'light' : 'dark'
