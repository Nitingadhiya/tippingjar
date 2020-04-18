import React, {Component} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Header} from '../../common/component';

export default class Signup extends Component {
  state = {};

  loginPress(navigate) {
    navigate('Login');
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.flex1}>
        <Header title={'Signup'} />

        <TouchableOpacity onPress={() => this.loginPress(navigation.navigate)}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
