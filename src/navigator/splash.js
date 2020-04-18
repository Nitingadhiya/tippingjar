import React from 'react';
// import {View, Text, TouchableOpacity, AppState} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Login from '../screens/login';
import authenticationTab from './authneticated';
import enableFontPatch from '../utils/enableFontPatch';
import Welcome from '../screens/welcome';
import Signup from '../screens/signup';
import ForgotPassword from '../screens/forgot-password';

const Stack = createStackNavigator();

export default class Splash extends React.Component {
  async componentDidMount() {
    console.disableYellowBox = true;
    enableFontPatch();
  }

  render() {
    return (
      <Stack.Navigator headerMode="none">
        {/* <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Signup" component={Signup} /> */}
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

        <Stack.Screen name="authenticationTab" component={authenticationTab} />
      </Stack.Navigator>
    );
  }
}
