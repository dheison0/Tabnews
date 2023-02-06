import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import Articles from './src/screens/Articles';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Artigos" component={Articles} />
  </HomeStack.Navigator>
)


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size }) => {
            let iconName;
            if (route.name == "Inicio") {
              iconName = focused ? 'home' : 'home-outline'
            } else if (route.name == "Salvos") {
              iconName = focused ? 'md-bookmarks-sharp' : 'md-bookmarks-outline';
            } else if (route.name == "Configurações") {
              iconName = focused ? 'md-settings' : 'md-settings-outline';
            }
            return (<Ionicons name={iconName} size={size} color="#222" />)
          },
        })}
      >
        <Tab.Screen name="Inicio" component={HomeStackScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Salvos" component={Articles} />
        <Tab.Screen name="Configurações" component={Articles} />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
