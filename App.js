import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './src/app/Home/Home.js'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
     {/* <Stack.Navigator >
        <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator> */}
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
  </Tab.Navigator>
  </NavigationContainer>
  );
}
