import React from 'react';
import color from 'color';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme, Portal, FAB} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

// import overlay from '../overlay';
import Dashboard from '../screens/tab/home';
import Test from '../screens/tab/test';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Images} from '../common/styles';

const Tab = createBottomTabNavigator();

export const authenticatedTab = () => {
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
  function MyTabBar({state, descriptors, navigation}) {
    return (
      <View style={{flexDirection: 'row'}}>
        <LinearGradient
          start={{x: 0.8, y: 0.5}}
          end={{x: 1, y: 0.1}}
          locations={[0, 0.57, 1]}
          colors={['#64C752', '#97DF23', '#BDF100']}
          style={{
            flexDirection: 'row',
            flex: 1,
            marginBottom: 30,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 10,
            borderRadius: 30,
            height: 56,
          }}>
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
                accessibilityRole="button"
                accessibilityStates={isFocused ? ['selected'] : []}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                style={{
                  flex: 1,
                  textAlign: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
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
          initialRouteName="Payouts"
          backBehavior="initialRoute"
          shifting={true}
          // activeColor={theme.colors.primary}
          // inactiveColor={color(theme.colors.text).alpha(0.6).rgb().string()}
          // barStyle={{ backgroundColor}}
          tabBar={(props) => <MyTabBar {...props} />}
          sceneAnimationEnabled={false}>
          <Tab.Screen
            name="Payouts"
            component={Dashboard}
            // options={{
            //   tabBarIcon: 'home-account',
            //   tabBarLabel: 'Home',
            //   tabBarColor,
            // }}
          />
          <Tab.Screen
            name="Profile"
            component={Test}
            // options={{
            //   tabBarIcon: 'format-list-bulleted',
            //   tabBarLabel: 'Product',
            //   // tabBarColor,
            // }}
          />
          <Tab.Screen
            name="Notifications"
            component={Dashboard}
            // options={{
            //   tabBarIcon: 'binoculars',
            //   tabBarLabel: 'Wishlist',
            //   //tabBarColor,
            // }}
          />
          <Tab.Screen
            name="More"
            component={Dashboard}
            // options={{
            //   tabBarIcon: 'shopping',
            //   tabBarLabel: 'Order',
            //   //tabBarColor,
            // }}
          />
        </Tab.Navigator>
        {/* <Portal>
        <FAB
          visible={isFocused}
          icon={icon}
          style={{
            position: 'absolute',
            bottom: safeArea.bottom + 65,
            right: 16,
          }}
          color="white"
          theme={{
            colors: {
              accent: theme.colors.primary,
            },
          }}
          onPress={() => {}}
        />
      </Portal> */}
      </View>
    </React.Fragment>
  );
};
