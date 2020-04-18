import React, {Component} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import styles from './styles';
import {Header} from '../../common/component';

export default class ForgotPassword extends Component {
  state = {};

  loginPress(navigate) {
    navigate('Login');
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title={'Forgot Password'} />
      </View>
    );
  }
}
