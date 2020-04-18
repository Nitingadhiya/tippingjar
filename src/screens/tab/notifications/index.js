import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Header} from '../../../common/component';

export default class Notifications extends Component {
  state = {};

  render() {
    return (
      <View style={{flex: 1}}>
        <Header title={'Notifications'} />
      </View>
    );
  }
}
