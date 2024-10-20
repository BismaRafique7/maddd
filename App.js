import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View  , Image , ImageBackground} from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import OnlineImageBackground1 from './screens/OnlineImageBackground';
import Home1 from './screens/home';
import About1 from './screens/aboutus';
import Remove from './screens/removes';
import Intefacee from './screens/interfaces'
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
  <NavigationContainer>
   <Stack.Navigator initialRouteName='Home1'>
    <Stack.Screen name='Home1' component={Home1}></Stack.Screen>
    <Stack.Screen name='About1' component={About1}></Stack.Screen>
    <Stack.Screen name='Remove' component={Remove}></Stack.Screen>
    <Stack.Screen name='Intefacee' component={Intefacee}></Stack.Screen>
    <Stack.Screen name='OnlineImageBackground1' component={OnlineImageBackground1}></Stack.Screen>
   </Stack.Navigator>
  </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})