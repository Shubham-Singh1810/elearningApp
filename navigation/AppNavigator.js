import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useGlobalState} from '../GlobalProvider';
// import AuthenticatedLayout from './AuthenticatedLayout';
import Layout from './Layout';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Splash from '../Screens/Splash';
const AppNavigator = () => {
  const {globalState} = useGlobalState();
  const [isUserLoged, setIsUserLoged] = useState(null);
  const [showSplash, setShowSplash]=useState(true)
  const getUserDetails = async () => {
    try {
      let res = await AsyncStorage.getItem('userData');
      setIsUserLoged(res);
    } catch (error) {}
  };
  useEffect(() => {
    getUserDetails();
    setTimeout(()=>{
      setShowSplash(false)
    }, 2000)
  });

  return (
    <View style={{flex: 1}}>
      {showSplash ? <Splash/> : <Layout/>}
    </View>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
