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
import script from './src/script.json'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const mdIcon = (name) => ({ in: `md-${name}`, out: `md-${name}-outline` })
const icons = {
  Home: mdIcon('home'),
  Saved: mdIcon('bookmark'),
  bug: mdIcon('bug')
}
function chooseTabBarIcon (route, focused) {
  const screenIcons = icons[route.name]
  const icon = screenIcons[focused ? 'in' : 'out']
  return (<Ionicons name={icon} size={30} color={theme.colors.primary} />)
}

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => chooseTabBarIcon(route, focused),
      tabBarShowLabel: false
    })}>
    <Tab.Screen
      name="Home"
      options={{ title: script.screenTitles.home }}
      component={HomeScreen}
    />
    <Tab.Screen
      name="Saved"
      options={{ title: script.screenTitles.saved }}
      component={SavedScreen}
    />
  </Tab.Navigator>
)

const App = () => (
  <NavigationContainer theme={theme}>
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        options={{ headerShown: false }}
        component={TabNavigator}
      />
      <Stack.Screen
        name="Post"
        options={{ title: script.screenTitles.post }}
        component={PostScreen}
      />
    </Stack.Navigator>
    <StatusBar style={statusBarScheme} />
  </NavigationContainer>
)

NavigationBar.setBackgroundColorAsync(theme.colors.background)
NavigationBar.setButtonStyleAsync(statusBarScheme)

export default App
