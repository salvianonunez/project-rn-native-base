import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { HomeNavigator } from './BottomTabNavigator';
import { useReduxSelector } from '../redux/services/index';
import CheckingScreens from '../screens/CheckingScreens';
import LoginExample from '../screens/LoginExample';

const Navigation = () => {

  const {authStatus} = useReduxSelector(store => store.authReducer);
  
  if(authStatus === 'checking'){
    return <CheckingScreens />;
  }
  if(authStatus === 'not-authenticated'){
    return <LoginExample />;
  }
  return (
    <NavigationContainer>
    <HomeNavigator />
    </NavigationContainer>
  );
};

export default Navigation;