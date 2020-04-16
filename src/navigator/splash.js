import React from 'react';
// import {View, Text, TouchableOpacity, AppState} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Login from '../screens/login';
import {authenticatedTab} from './authneticated';
import enableFontPatch from '../utils/enableFontPatch';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
export default class Splash extends React.Component {
  async componentDidMount() {
    console.disableYellowBox = true;
    enableFontPatch();
  }

  render() {
    return (
      <Stack.Navigator headerMode="none">
        {/* <Stack.Screen name="Login" component={Login} /> */}
        <Stack.Screen name="authenticatedTab" component={authenticatedTab} />
        {/* <Stack.Screen name="UserNavigation" component={UserNavigation} />
        <Stack.Screen
          name="ProductListScreen"
          component={ProductList}
          options={{headerTitle: 'Tweet'}}
        /> */}
      </Stack.Navigator>
    );
  }
}
