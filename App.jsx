import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from './src/screen/Home';
import PostScreen from './src/screen/Post';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const icons = {
  Home: ['md-home', 'md-home-outline']
};


const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => chooseTabBarIcon(route, focused),
      tabBarShowLabel: false
    })}>
    <Tab.Screen name="Home" options={{ title: "Inicio" }} component={HomeScreen} />
  </Tab.Navigator>
);


const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Main" options={{ headerShown: false }} component={TabNavigator} />
      <Stack.Screen name="Post" options={{ title: "Postagem" }} component={PostScreen} />
    </Stack.Navigator>
    <StatusBar style="auto" />
  </NavigationContainer>
);


function chooseTabBarIcon(route, focused) {
  let icon = focused ? 'md-bug' : 'md-bug-outline';
  if (icons[route.name]) {
    const iconPair = icons[route.name]
    icon = focused ? iconPair[0] : iconPair[1];
  }
  return (<Ionicons name={icon} size={30} />);
}


export default App;