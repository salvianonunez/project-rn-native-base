import React, { useState } from 'react';

import {Input, Link, Button, Heading, Center } from 'native-base';
import { setAuthStatus, setUser } from '../redux/reducers/authReducer/auth';
import { AuthStatus } from '../redux/reducers/authReducer/authInterface';
import { useReduxDispatch } from '../redux/services/index';

const LoginExample = () => {

const [email, setEmail] = useState('');
const dispatch = useReduxDispatch();
const login = () =>{
  dispatch(setUser({email}));
  dispatch(setAuthStatus('authenticated'));
}
return (
  <Center
    backgroundColor={'blueGray.800'}
    height={'100%'}
  >
    <Heading
      fontFamily={'mono'}
      fontSize={'3xl'}
      color={'white'}
      textAlign={'center'}
    >
    Inicio de sesión
    </Heading>

    <Input
      backgroundColor={'white'}
      marginTop={'5'}
      mx="auto" w="80%" size="md"
      variant="rounded"
      placeholder="Usuario"
      value={email}
      onChangeText={(text) => setEmail(text)}
    />

    <Input
    backgroundColor={'white'}
    marginTop={'5'}
    mx="auto" w="80%" size="md"
    variant="rounded"
    type="password"
    placeholder="Contraseña"
    />

      <Link
        alignSelf="center"
        marginTop={'4'}
        alignContent={'center'}
        href="https://facebook.com"
        isExternal _text={{color: 'blue.400'}}
        mt={-0.5} _web={{mb: -2}}>
            ¿Olvidaste tu contraseña?
      </Link>

    {/* <Box
      marginTop={'4'}
      alignItems={'center'}
    >
      <Link
        href="https://facebook.com"
        isExternal _text={{color: "blue.400"}}
        mt={-0.5} _web={{mb: -2}}>
            ¿Olvidaste tu contraseña?
      </Link>
    </Box> */}

    <Button
    onPress={login}
    mx="auto" w="60%" size="md"
    marginTop={'5'}
    colorScheme="secondary"
    >
    Iniciar sesión
    </Button>


    {/* <Text
      fontFamily={'mono'}
      marginTop={'2010'}
      fontSize={"3xl"}
      color={'white'}
      textAlign={'center'}
      >
    </Text> */}
    </Center>
);
};

// // const styles = {
// //   title: {
// //     // fontFamily:{'heading'},
// //     // fontStyle:{'-moz-initial'},
// //     // fontSize:{"2xl"}
// //     // color:{'white'},
// //     // alignContent:{'center'},
// //     textAlign: center
// //   }

// }
export default LoginExample;
