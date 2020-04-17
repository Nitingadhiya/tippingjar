import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';

export default class Test extends Component {
  state = {};

  render() {
    return (
      <SafeAreaView style={styles.safeView}>
        <View>
          <Text>Text</Text>
        </View>
      </SafeAreaView>
    );
  }
}
