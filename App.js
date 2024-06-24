import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import {GlobalStateProvider} from './GlobalProvider';
import AppNavigator from './navigation/AppNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Splash from './Screens/Splash';

const App = () => {
  return (
    // <View style={{flex:1}}>
    //   <GlobalStateProvider>
    //     <AppNavigator />
    //   </GlobalStateProvider>

    // </View>
    <SafeAreaProvider>
      <StatusBar hidden={false} backgroundColor="#11134e" />
      <GlobalStateProvider>
        <AppNavigator />
        {/* <Splash/> */}
      </GlobalStateProvider>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
