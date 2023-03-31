import React from 'react';
import { Button, Center, Text } from 'native-base';
import { SafeAreaView } from 'react-native';
import { useReduxDispatch, useReduxSelector } from '../../redux/services/index';
import { setLogout } from '../../redux/reducers/authReducer/auth';

const UserScreen = () => {
  const dispatch = useReduxDispatch();
  const {email} = useReduxSelector(store => store.authReducer.user);
  
  const logout = () =>{
    dispatch(setLogout());
  }
  return (
    <SafeAreaView>
      <Center height='100%'>
        <Text>UserScreen</Text>
        <Text>Bievenido {email}</Text>
        <Button onPress={logout}>Cerrar Sesion</Button>
      </Center>
    </SafeAreaView>
  );
};

export default UserScreen;