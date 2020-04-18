import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';
import FindPeople from '../../screens/tab/find-people';
import Transactions from '../../screens/tab/transactions';
import Profile from '../../screens/tab/profile';
import More from '../../screens/tab/more';
import {Images, ApplicationStyles} from '../../common/styles';

const Tab = createBottomTabNavigator();

export const TippiTabs = () => {
  tabSwitchCase = (label, isFocused) => {
    switch (label) {
      case 'FindPeople':
        return isFocused ? 'tabFindPeopleActive' : 'tabFindPeopleInActive';
      case 'Profile':
        return isFocused ? 'tabProfileActive' : 'tabProfileInActive';
      case 'Transactions':
        return isFocused ? 'tabTransactionActive' : 'tabTransactionInActive';
      case 'More':
        return isFocused ? 'tabMoreActive' : 'tabMoreInActive';
    }
  };
  function MyTabBar({state, descriptors, navigation}) {
    return (
      <View style={{flexDirection: 'row'}}>
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

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
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
  }

  return (
    <React.Fragment>
      <View style={{flex: 1}}>
        <Tab.Navigator
          initialRouteName="FindPeople"
          backBehavior="initialRoute"
          tabBar={(props) => <MyTabBar {...props} />}
          sceneAnimationEnabled={false}>
          <Tab.Screen name="FindPeople" component={FindPeople} />
          <Tab.Screen name="Transactions" component={Transactions} />
          <Tab.Screen name="Profile" component={Profile} />
          <Tab.Screen name="More" component={More} />
        </Tab.Navigator>
      </View>
    </React.Fragment>
  );
};
