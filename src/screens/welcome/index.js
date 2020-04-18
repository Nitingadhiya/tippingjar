import React, {Component} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class Welcome extends Component {
  state = {};

  singupPress(navigate) {
    navigate('Signup');
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text>Welcome</Text>
        <TouchableOpacity onPress={() => this.singupPress(navigation.navigate)}>
          <Text>Signup</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
