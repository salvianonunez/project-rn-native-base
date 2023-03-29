import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Box, Center, Heading, Input, Select, Text } from 'native-base';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { StackParamList } from '../../navigation/StackParams';


interface Props extends NativeStackScreenProps<StackParamList, 'TestScreen'> { }

const TestScreen = (props:Props) => {
  const { navigation, route } = props;
  const { text } = route.params;

  return (
    <SafeAreaView>
    <Center height='100%'>
    <Text>Hola</Text>
    </Center>
    </SafeAreaView>
  );
};


export default TestScreen;