import React, {Component} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {Color, Matrics, Fonts} from '../../styles';
import LinearGradient from 'react-native-linear-gradient';
import LinearGradientComponent from '../linear-gradient';
import NativeComponent from '../native-component';

const Linear = {
  start: {x: 0.4, y: 0.3},
  end: {x: 1, y: 0.1},
  location: [0, 1],
  colors: ['#64C752', '#BDF100'],
};

export const Button = ({
  label,
  onPress,
  customStyle,
  children,
  customTextStyle,
  customIcon,
  disabled,
}) => {
  const {start, end, location, colors} = Linear;
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8} disabled={disabled}>
      <LinearGradientComponent linearStyle={styles.buttonStyle}>
        <View style={customStyle}>
          {customIcon && <View style={styles.customIcon}>{customIcon}</View>}
          <Text style={[styles.buttonTextStyle, customTextStyle]}>{label}</Text>
          {children}
        </View>
      </LinearGradientComponent>
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
  },
  buttonTextStyle: {
    color: Color.white,
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
