import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabParamList, StackParamList } from './StackParams';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RemixIcon from "../components/RemixIcon";
import { Use } from "react-native-svg";
import TestScreen from '../screens/TestScreen/TestScreen';
import UserScreen from "../screens/UserScreen/UserScreen";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();
const Stack = createNativeStackNavigator<StackParamList>();

const HomeStack = () =>{
  return(
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    >
      <Stack.Screen 
      name='HomeScreen'
      component={HomeScreen}
       />
      <Stack.Screen 
      name='TestScreen'
      component={TestScreen}
       />
    </Stack.Navigator>

  );
};

const BottomTabNavigator = () =>{
  return (
    <BottomTab.Navigator
    screenOptions={{
      tabBarShowLabel: false,
    }}
    >
      <BottomTab.Screen 
        name='HomeStack'
        component={HomeStack}
        options={{
          tabBarIcon:({color, focused, size}) =>{
            return <RemixIcon
              name='home'
              type={focused ? 'fill' : 'line'}
              color={color}
              size={size} />;
          },
        }}
      />
      <BottomTab.Screen 
        name='UserScreen'
        component={UserScreen}
        options={{
          tabBarIcon:({color, focused, size}) =>{
            return <RemixIcon
              name='user'
              type={focused ? 'fill' : 'line'}
              color={color}
              size={size} />;
          },
        }}
      />
    </BottomTab.Navigator>

  );
};

export const HomeNavigator = () =>{
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    >
      <Stack.Screen 
      name='HomeStack'
      component={BottomTabNavigator}
      />
    </Stack.Navigator>
  );
};

