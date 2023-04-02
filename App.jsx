import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { theme, statusBarScheme } from './src/colors'
import HomeScreen from './src/screen/Home'
import PostScreen from './src/screen/Post'
import SavedScreen from './src/screen/Saved'
import * as NavigationBar from 'expo-navigation-bar'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
const icons = {
  Home: ['md-home', 'md-home-outline'],
  Saved: ['md-bookmark', 'md-bookmark-outline'],
  bug: ['md-bug', 'md-bug-outline']
}

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => chooseTabBarIcon(route, focused),
      tabBarShowLabel: false
    })}>
    <Tab.Screen name="Home" options={{ title: 'Postagens' }} component={HomeScreen} />
    <Tab.Screen name="Saved" options={{ title: 'Salvos' }} component={SavedScreen} />
  </Tab.Navigator>
)

const App = () => (
  <NavigationContainer theme={theme}>
    <Stack.Navigator>
      <Stack.Screen name="Main" options={{ headerShown: false }} component={TabNavigator} />
      <Stack.Screen name="Post" options={{ title: 'Postagem' }} component={PostScreen} />
    </Stack.Navigator>
    <StatusBar style={statusBarScheme} />
  </NavigationContainer>
)

function chooseTabBarIcon (route, focused) {
  const iconPair = icons[route.name] ?? icons.bug
  const icon = focused ? iconPair[0] : iconPair[1]
  return (<Ionicons name={icon} size={30} color={theme.colors.primary} />)
}

NavigationBar.setBackgroundColorAsync(theme.colors.background)
NavigationBar.setButtonStyleAsync(statusBarScheme)

export default App
