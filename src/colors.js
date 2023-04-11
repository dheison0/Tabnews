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
  },
  custom: {
    strategyChooser: {
      background: '#6272a4',
      buttonText: '#FFF'
    }
  }
}

const light = {
  dark: false,
  colors: {
    primary: 'rgb(0, 122, 255)',
    background: '#FFF',
    card: '#FFF',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(216, 216, 216)',
    notification: 'rgb(255, 59, 48)'
  },
  custom: {
    strategyChooser: {
      background: '#FFF',
      buttonText: '#224'
    }
  }
}

export const colorScheme = Appearance.getColorScheme()
export const statusBarScheme = colorScheme === 'dark' ? 'light' : 'dark'
export const theme = colorScheme === 'dark' ? dark : light
