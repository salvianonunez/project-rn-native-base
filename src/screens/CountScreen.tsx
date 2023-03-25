import React, {useState} from 'react';
import { Text, Button } from 'native-base'
import { SafeAreaView } from 'react-native'


const CountScreen = () => {
  const [cont, setCont] = useState(0);
  const onPress = () => {
    setCont(cont+1)
    console.log('Presionó')
  }
  return (
    <SafeAreaView>
      <Text 
        color={'danger.700'}
        fontSize={'5xl'}
      >
        {cont}
      </Text>
      <Button
        width='xs'
        onPress={onPress}
      >
      Contar
      </Button>
    </SafeAreaView>
  );
};

export default CountScreen;