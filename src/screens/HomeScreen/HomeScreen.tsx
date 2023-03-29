import React from 'react'
import { Center, Text, Button } from 'native-base';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../../navigation/StackParams';


const HomeScreen = () => {

const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Center height='100%'>
        <Text>HomeScreen</Text>
        <Button
        backgroundColor={'black'}
        onPress={() =>{
          console.log('hola');
          navigation.navigate('TestScreen', {text:'hola bicho'});
        }}
        >
          <Text>Go test screen</Text>
        </Button>
      </Center>
    </SafeAreaView>

  );
};

export default HomeScreen;