import React from 'react';
import {View, Text, TouchableOpacity, AppState} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
// import Login from './login';
import enableFontPatch from '../utils/enableFontPatch';

const Stack = createStackNavigator();
export default class Splash extends React.Component {
  state = {
    loading: true,
  };

  async componentDidMount() {
    console.disableYellowBox = true;
    enableFontPatch();
  }

  render() {
    const {loading, userInfo} = this.state;
    if (loading) {
      return (
        <View>
          <Text>Please wait...</Text>
        </View>
      );
    }
    return (
      <View>
        <Text>sa</Text>
        {/* // // <>
      //   <Stack.Screen name="Login" component={Login} /> */}

        {/* <Stack.Screen name="UserNavigation" component={UserNavigation} />
        <Stack.Screen
          name="ProductListScreen"
          component={ProductList}
          options={{headerTitle: 'Tweet'}}
        /> */}
        {/* // </> */}
      </View>
    );
  }
}
