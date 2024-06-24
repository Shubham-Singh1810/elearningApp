import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Feed from '../screen/Feed';
import Comments from '../screen/Comments';
import Explore from '../screen/Explore';
import Create from '../screen/Create';
import Profile from '../screen/Profile';
import EditProfile from '../screen/EditProfile';
import Notes from '../screen/Notes';
import Live from '../screen/Live';
import Faq from '../screen/Faq';
import CategoryList from '../screen/CategoryList';
import CategoryDetails from '../screen/CategoryDetails';
import CourseDetails from '../screen/CourseDetails';
const AuthenticatedLayout = () => {
    const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Feed"
          component={Feed}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Notes"
          component={Notes}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Live"
          component={Live}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Faq"
          component={Faq}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Comments"
          component={Comments}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Explore"
          component={Explore}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Create"
          component={Create}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Edit Profile"
          component={EditProfile}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Category List"
          component={CategoryList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Category Details"
          component={CategoryDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Course Details"
          component={CourseDetails}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AuthenticatedLayout

const styles = StyleSheet.create({})