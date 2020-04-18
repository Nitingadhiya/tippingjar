import React from 'react';
import {TextInput, View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Matrics, Fonts, Color, ApplicationStyles} from '../../styles';

const visibility = (secureTextEntry, passwordVisibleFn) => (
  <TouchableOpacity
    style={ApplicationStyles.passwordVisible}
    onPress={passwordVisibleFn}>
    <Icon
      name={secureTextEntry ? 'visibility' : 'visibility-off'}
      size={20}
      color={Color.black30}
    />
  </TouchableOpacity>
);

export const TextInputView = ({
  keyboardType,
  maxLength,
  onFocus,
  placeholder,
  placeholderTextColor,
  value,
  style,
  onBlur,
  onChangeText,
  onSubmitEditing,
  multiline,
  returnKeyType,
  Ref,
  editable,
  autoCapitalize,
  secureTextEntry,
  placeholderStyle,
  phoneInput,
  langType,
  passwordVisible,
  passwordVisibleFn,
  label,
}) => {
  return (
    <View style={styles.textInputMainView}>
      <View>
        <Text style={styles.textInputLabel}>{label}</Text>
      </View>
      <TextInput
        style={[
          style,
          multiline ? ApplicationStyles.multiline : '',
          {backgroundColor: editable ? Color.paleGrey : Color.white},
        ]}
        value={value}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        placeholderTextColor={[styles.placeholderText, placeholderTextColor]}
        onChangeText={onChangeText}
        multiline={multiline}
        maxLength={maxLength}
        keyboardType={keyboardType}
        autoCorrect={false}
        autoCapitalize={autoCapitalize || 'none'}
        onSubmitEditing={onSubmitEditing}
        returnKeyType={returnKeyType}
        editable={!editable}
        ref={Ref}
        onBlur={onBlur}
        onFocus={onFocus}
        underlineColorAndroid="transparent"
      />
      {passwordVisible && visibility(secureTextEntry, passwordVisibleFn)}
    </View>
  );
};
