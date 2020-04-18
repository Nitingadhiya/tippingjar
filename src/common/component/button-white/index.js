import React, {Component} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {Color, Matrics, Fonts} from '../../styles';
import LinearGradient from 'react-native-linear-gradient';
import LinearGradientComponent from '../linear-gradient';
import NativeComponent from '../native-component';

export const ButtonWhite = ({
  label,
  onPress,
  customStyle,
  children,
  customTextStyle,
  customIcon,
  disabled,
}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8} disabled={disabled}>
      <View style={[styles.buttonStyle, customStyle]}>
        {customIcon && <View style={styles.customIcon}>{customIcon}</View>}
        <Text style={[styles.buttonTextStyle, customTextStyle]}>{label}</Text>
        {children}
      </View>
    </TouchableOpacity>
  );
};
const styles = {
  buttonStyle: {
    height: Matrics.ScaleValue(44),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Matrics.ScaleValue(22),
    marginHorizontal: Matrics.ScaleValue(30),
    borderWidth: 1,
    borderColor: Color.primary,
  },
  buttonTextStyle: {
    color: Color.primary,
    fontSize: Matrics.ScaleValue(14),
    fontFamily: Fonts.type.RubikMedium,
    textAlign: 'center',
  },
  customIcon: {
    position: 'absolute',
    zIndex: 1,
    left: Matrics.ScaleValue(20),
  },
};
