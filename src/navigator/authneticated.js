import React from 'react';
import color from 'color';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {useTheme, Portal, FAB} from 'react-native-paper';

// import overlay from '../overlay';
import Dashboard from '../screens/tab/home';

const Tab = createMaterialBottomTabNavigator();

export const authenticatedTab = () => {
  const theme = useTheme();

  // const tabBarColor = theme.dark
  //   ? (overlay(6, theme.colors.surface) as string)
  //   : theme.colors.surface;

  return (
    <React.Fragment>
      <Tab.Navigator
        initialRouteName="Dashboard"
        backBehavior="initialRoute"
        shifting={true}
        activeColor={theme.colors.primary}
        inactiveColor={color(theme.colors.text).alpha(0.6).rgb().string()}
        sceneAnimationEnabled={false}>
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            tabBarIcon: 'home-account',
            tabBarLabel: 'Home',
            // tabBarColor,
          }}
        />
        <Tab.Screen
          name="ProductList"
          component={Dashboard}
          options={{
            tabBarIcon: 'format-list-bulleted',
            tabBarLabel: 'Product',
            // tabBarColor,
          }}
        />
        <Tab.Screen
          name="WishList"
          component={Dashboard}
          options={{
            tabBarIcon: 'binoculars',
            tabBarLabel: 'Wishlist',
            //tabBarColor,
          }}
        />
        <Tab.Screen
          name="Order"
          component={Dashboard}
          options={{
            tabBarIcon: 'shopping',
            tabBarLabel: 'Order',
            //tabBarColor,
          }}
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
    </React.Fragment>
  );
};
