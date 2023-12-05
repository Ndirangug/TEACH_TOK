/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Image, ImageSourcePropType} from 'react-native';
import {useDispatch} from 'react-redux';
import {incrementSeconds} from '../../core/redux/timer/timerSlice';
import ActivityScreen from '../../presentation/ActivityScreen';
import BookmarksScreen from '../../presentation/BookmarksScreen';
import DiscoverScreen from '../../presentation/DiscoverScreen';
import HomeScreen from '../../presentation/HomeScreen';
import ProfileScreen from '../../presentation/ProfileScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(incrementSeconds());
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [dispatch]);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarStyle: {
            backgroundColor: 'black', // Set the background color
          },
          headerShown: false,
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.4)',
          tabBarIcon: ({focused, color, size}) => {
            let icon: ImageSourcePropType = require('../../../assets/images/home_active.png');

            if (route.name === 'Home') {
              icon = focused
                ? require('../../../assets/images/home_active.png')
                : require('../../../assets/images/home.png');
            } else if (route.name === 'Discover') {
              icon = focused
                ? require('../../../assets/images/discover_active.png')
                : require('../../../assets/images/discover.png');
            } else if (route.name === 'Activity') {
              icon = focused
                ? require('../../../assets/images/activity_active.png')
                : require('../../../assets/images/activity.png');
            } else if (route.name === 'Bookmarks') {
              icon = focused
                ? require('../../../assets/images/bookmarks_active.png')
                : require('../../../assets/images/bookmarks.png');
            } else if (route.name === 'Profile') {
              icon = focused
                ? require('../../../assets/images/profile_active.png')
                : require('../../../assets/images/profile.png');
            }

            return <Image source={icon} />;
          },
        })}
        initialRouteName="Home">
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Discover" component={DiscoverScreen} />
        <Tab.Screen name="Activity" component={ActivityScreen} />
        <Tab.Screen name="Bookmarks" component={BookmarksScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
