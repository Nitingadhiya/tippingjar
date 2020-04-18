import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import {Images} from '../../styles';

const Linear = {
  start: {x: 0.4, y: 0.3},
  end: {x: 1, y: 0.1},
  location: [0, 1],
  colors: ['#64C752', '#BDF100'],
};

backButton = () => (
  <TouchableOpacity style={styles.backStyles}>
    <Image source={Images.backIcon} />
  </TouchableOpacity>
);

export const Header = ({title, left}) => {
  const navigation = useNavigation();
  const {start, end, location, colors} = Linear;
  return (
    <LinearGradient
      start={start}
      end={end}
      locations={location}
      colors={colors}
      style={styles.linearHeader}>
      <View style={styles.headerHeight}>
        {/* {left === 'menu' && drawerMenu(navigation)} */}
        {left === 'back' && backButton()}

        <View>
          <Text style={styles.screenTitle}>{title}</Text>
        </View>
      </View>
    </LinearGradient>
  );
};
