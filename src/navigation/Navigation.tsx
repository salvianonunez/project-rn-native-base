import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { HomeNavigator } from './BottomTabNavigator';

const Navigation = () => {
  return (
    <NavigationContainer>
    <HomeNavigator />
    </NavigationContainer>
  );
};

export default Navigation;