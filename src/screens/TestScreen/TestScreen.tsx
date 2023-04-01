import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Box, Center, Heading, Input, Select, Text } from 'native-base';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { StackParamList } from '../../navigation/StackParams';
import { useReduxSelector } from '../../redux/services';


interface Props extends NativeStackScreenProps<StackParamList, 'TestScreen'> { }

const TestScreen = (props:Props) => {
  const { navigation } = props;
  const {pokemonSelected, pokemonDetail } = useReduxSelector(store => store.pokemon);
  
  const renderAbilities =() =>{
    const items: JSX.Element[] = [];
    pokemonDetail.abilities.forEach(ability =>{
      const item = <Text>{ability.ability.name}</Text>
      items.push(item);
    });
    return items;
  }

  return (
    <SafeAreaView>
    <Center height='100%'>
    <Text fontWeight='semibold'>{pokemonSelected.name.toUpperCase()}</Text>
    <Text>Base Experience: { pokemonDetail.base_experience}</Text>
    <Text>Abilities: </Text>
    {/* {renderAbilities()} */}
    {pokemonDetail.abilities.map(({ability}) => <Text>{ability.name}</Text>)}
    </Center>
    </SafeAreaView>
  );
};


export default TestScreen;