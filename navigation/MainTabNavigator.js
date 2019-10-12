import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import Feed from '../screens/Feed'
import Profile from '../screens/Profile';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: { },
});


// Feed

const FeedStack = createStackNavigator(
  {
    Home: Feed,
  },
  config
);

FeedStack.navigationOptions = {

  tabBarLabel: 'Feed',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? "ios-globe"  
          : 'md-information-circle'
      }
    />
  ),
};

FeedStack.path = '';



// Profile

const ProfileStack = createStackNavigator(
  {
    Home: Profile,
  },
  config
);

ProfileStack.navigationOptions = {

  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? "ios-contact"  
          : 'md-information-circle'
      }
    />
  ),
};

ProfileStack.path = '';




const SearchStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

SearchStack.navigationOptions = {

  tabBarLabel: 'Search',
  tabBarIcon: ({ focused }) => (

    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-search' : 'md-link'} />
  ),
};

SearchStack.path = '';




const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  
  tabBarLabel: 'Gifts',
  tabBarIcon: ({ focused }) => (

    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-contacts' : 'md-options'} />
  ),
};

SettingsStack.path = '';




const tabNavigator = createBottomTabNavigator({
  FeedStack,
  SearchStack,
  SettingsStack,
  ProfileStack,
});

tabNavigator.path = '';

export default tabNavigator;
