import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {TipperTabs} from './bottom-tabs/tipper-tabs';
import {TippiTabs} from './bottom-tabs/tippi-tabs';

const Stack = createStackNavigator();

export default class authenticationTab extends React.Component {
  tabBarBottom() {
    return TipperTabs;
    //return TippiTabs;
  }

  render() {
    return (
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="tabHome" component={this.tabBarBottom()} />
      </Stack.Navigator>
    );
  }
}
