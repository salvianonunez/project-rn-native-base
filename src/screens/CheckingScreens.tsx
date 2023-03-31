import { Center, Icon } from 'native-base';
import React from 'react'
import { ActivityIndicator, SafeAreaView } from 'react-native';

const CheckingScreens = () => {
  return (
    <SafeAreaView>
      <Center height='100%'>
        <Icon
        as={<ActivityIndicator size='large'/>}
        color='cyan'
        />

      </Center>
    </SafeAreaView>
  );
;}

export default CheckingScreens;