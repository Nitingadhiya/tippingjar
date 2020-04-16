import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from './splash';
const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Splash" headerMode="none">
      <Stack.Screen name="Splash" component={Splash} />
    </Stack.Navigator>
  );
};
