import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {Images} from '../../styles';

const Linear = {
  start: {x: 0.4, y: 0.3},
  end: {x: 1, y: 0.1},
  location: [0, 1],
  colors: ['#64C752', '#BDF100'],
};

export default class LinearGradientComponent extends Component {
  render() {
    const {start, end, location, colors} = Linear;
    const {linearStyle} = this.props;
    return (
      <LinearGradient
        start={start}
        end={end}
        locations={location}
        colors={colors}
        style={linearStyle}
        {...this.props}
      />
    );
  }
}
