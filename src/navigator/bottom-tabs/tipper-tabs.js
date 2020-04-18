import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {SafeAreaConsumer} from 'react-native-safe-area-context';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';
import Payouts from '../../screens/tab/payouts';
import Profile from '../../screens/tab/profile';
import More from '../../screens/tab/more';
import {Images, ApplicationStyles} from '../../common/styles';
import Notifications from '../../screens/tab/notifications';

const Tab = createBottomTabNavigator();

export const TipperTabs = () => {
  tabSwitchCase = (label, isFocused) => {
    switch (label) {
      case 'Payouts':
        return isFocused ? 'tabPayoutsActive' : 'tabPayoutsInActive';
      case 'Profile':
        return isFocused ? 'tabProfileActive' : 'tabProfileInActive';
      case 'Notifications':
        return isFocused
          ? 'tabNotificationsActive'
          : 'tabNotificationsInActive';
      case 'More':
        return isFocused ? 'tabMoreActive' : 'tabMoreInActive';
    }
  };

  MyTabBar = ({state, descriptors, navigation}) => {
    return (
      <View style={ApplicationStyles.flexRow}>
        <LinearGradient
          start={{x: 0.8, y: 0.5}}
          end={{x: 1, y: 0.1}}
          locations={[0, 0.57, 1]}
          colors={['#64C752', '#97DF23', '#BDF100']}
          style={ApplicationStyles.tabBarStyle}>
          {state.routes.map((route, index) => {
            const {options} = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            return (
              <TouchableOpacity
                onPress={onPress}
                style={ApplicationStyles.tabTouchButton}>
                <Image source={Images[tabSwitchCase(label, isFocused)]} />
              </TouchableOpacity>
            );
          })}
        </LinearGradient>
      </View>
    );
  };

  return (
    <React.Fragment>
      <View style={ApplicationStyles.flex1}>
        <Tab.Navigator
          initialRouteName="Payouts"
          backBehavior="initialRoute"
          sceneAnimationEnabled={false}
          tabBar={(props) => <MyTabBar {...props} />}>
          <Tab.Screen name="Payouts" component={Payouts} />
          <Tab.Screen name="Profile" component={Profile} />
          <Tab.Screen name="Notifications" component={Notifications} />
          <Tab.Screen name="More" component={More} />
        </Tab.Navigator>
      </View>
    </React.Fragment>
  );
};
