import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { colors, statusBarScheme, navigatorTheme } from './src/colors'
import HomeScreen from './src/screen/Home'
import PostScreen from './src/screen/Post'
import SavedScreen from './src/screen/Saved'
import UserScreen from './src/screen/User'
import * as NavigationBar from 'expo-navigation-bar'
import script from './src/script.json'

const TAB_NAVIGATION_ICON_SIZE = 30
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
  return (
    <Ionicons
      name={icon}
      size={TAB_NAVIGATION_ICON_SIZE}
      color={colors.primary}
    />
  )
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
  <NavigationContainer theme={navigatorTheme}>
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
      <Stack.Screen
        name="User"
        options={{ title: script.screenTitles.user }}
        component={UserScreen}
      />
    </Stack.Navigator>
    <StatusBar style={statusBarScheme} />
  </NavigationContainer>
)

NavigationBar.setBackgroundColorAsync(colors.background)
NavigationBar.setButtonStyleAsync(statusBarScheme)

export default App
