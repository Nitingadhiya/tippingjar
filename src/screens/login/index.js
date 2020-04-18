import React, {Component} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import {
  Header,
  Button,
  ButtonWhite,
  TextInputView,
} from '../../common/component';
import {Images} from '../../common/styles';

export default class Login extends Component {
  state = {};

  forgotPasswordPress(navigate) {
    navigate('ForgotPassword');
  }

  payoutsPress(navigate) {
    navigate('authenticationTab');
  }

  backPress(navigation) {
    navigation.goBack();
  }

  hereWeGo(navigate) {
    navigate('ForgotPassword');
  }

  render() {
    const {navigation} = this.props;
    const {navigate} = navigation;
    return (
      <View style={styles.container}>
        <Header
          title={'Login'}
          left="back"
          backPress={() => this.backPress(navigation)}
        />

        <TouchableOpacity onPress={() => this.forgotPasswordPress(navigate)}>
          <Text>Forgot password</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.payoutsPress(navigate)}>
          <Text>Payouts</Text>
        </TouchableOpacity>

        <Button label={'Here we go!'} onPress={() => this.hereWeGo(navigate)} />
        <ButtonWhite
          label={'I want to receive tips'}
          onPress={() => this.hereWeGo(navigate)}
        />

        <ButtonWhite
          label={'Signup with Facebook'}
          onPress={() => this.hereWeGo(navigate)}
          customStyle={styles.fbSocialButton}
          customIcon={<Image source={Images.fb_login} />}
          customTextStyle={styles.socialButtonText}
        />

        <ButtonWhite
          label={'Signup with Google'}
          onPress={() => this.hereWeGo(navigate)}
          customStyle={styles.gaSocialButton}
          customIcon={<Image source={Images.ga_login} />}
          customTextStyle={styles.socialButtonText}
        />

        <ButtonWhite
          label={'Signup with Apple'}
          onPress={() => this.hereWeGo(navigate)}
          customStyle={styles.appleSocialButton}
          customIcon={<Image source={Images.fb_login} />}
          customTextStyle={styles.socialButtonText}
        />

        <TextInputView
          label={'First Name'}
          style={styles.textInput}
          placeholder={'Demo Text Input'}
          onChangeText={(text) => this.textInputChange(text)}
        />
      </View>
    );
  }
}
