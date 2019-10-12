import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import Feed from '../screens/Feed'
import Profile from '../screens/Profile';
import LinksScreen from '../screens/LinksScreen';
import Gifts from "../screens/Gifts"
import Search from "../screens/Search"
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
    Links: Search,
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




const GiftStack = createStackNavigator(
  {
    Settings: Gifts,
  },
  config
);

GiftStack.navigationOptions = {
  
  tabBarLabel: 'Gifts',
  tabBarIcon: ({ focused }) => (

    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-contacts' : 'md-options'} />
  ),
};

GiftStack.path = '';




const tabNavigator = createBottomTabNavigator({
  FeedStack,
  SearchStack,
  GiftStack,
  ProfileStack,
});

tabNavigator.path = '';

export default tabNavigator;
