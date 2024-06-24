import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from '../Screens/Authentication/Login';
import SignUp from '../Screens/Authentication/SignUp';
import OtpScreen from '../Screens/Authentication/OtpScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Layout = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OtpScreen"
          component={OtpScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Layout

const styles = StyleSheet.create({})