import React from 'react'
import { Center, Text, Button, Heading, Box, ScrollView, FlatList } from 'native-base';
import { ActivityIndicator, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../../navigation/StackParams';
import { useEffect, useState } from 'react';
import { fetchPokemon, fetchPokemons } from '../../redux/services/pokemon.service';
import { Pokemon } from '../../interfaces/pokemon';
import pokemonReducer, { setPokemonSelected } from '../../redux/reducers/pokemonReducer/pokemon';
import { useReduxDispatch, useReduxSelector } from '../../redux/services';

const HomeScreen = () => {

const navigation = useNavigation();
const {width} = Dimensions.get('screen');

const {pokemons, isLoading} = useReduxSelector(store => store.pokemon);
const dispatch = useReduxDispatch();

useEffect(() => {
  dispatch(fetchPokemons());
}, [dispatch])


const renderItem = (item: Pokemon) => {
  return(
         <TouchableOpacity
              style={{width}}
              activeOpacity={0.75}
              onPress={()=> {
                dispatch(setPokemonSelected(item));
                dispatch(fetchPokemon(item.url));
                navigation.navigate('TestScreen', { text:item.name });
              }}
              >
                <Box
                py='1' borderBottomWidth='1'
                >
                  <Text>{item.name}</Text>
                </Box>
          </TouchableOpacity>

  )
}

const renderList = () =>{
  if (isLoading){
    return <ActivityIndicator size='large' color='blue' />;
  }
  return(
    <FlatList
    data={pokemons}
    keyExtractor={(item, index) => `${item.name}_${index}`}
    renderItem= {({item}) => ( renderItem(item))}

  />

  );
};


  return (
    <SafeAreaView>
      <Heading>
        <Box 
        w={width} 
        alignItems='center' 
        justifyContent='center'
        borderBottomWidth='1'
        marginBottom='1'
        >
          
            <Button
            backgroundColor={'cyan.100'}
            onPress={() =>{
              console.log('hola');
              navigation.navigate('TestScreen', {text:'hola bicho'});
            }}
            >
              <Text>Go test screen</Text>
            </Button>
            <Text fontSize='2xl' fontWeight='medium'>Pokemons</Text>
        </Box>
      </Heading>
      <Center height='100%' mt='1'>
        {renderList()}

        {/* <ScrollView>
          {pokemons.map((pokemon, index)=>(
          <TouchableOpacity
          style={{width}}
          key={index}
          activeOpacity={0.75}
          onPress={()=> console.log('pokemon url', pokemon.url)}
          >
            <Box
            py='1' borderBottomWidth='1'
            >
              <Text>{pokemon.name}</Text>
            </Box>
          </TouchableOpacity>
          ))}

        </ScrollView> */}
      </Center>
    </SafeAreaView>

  );
};

export default HomeScreen;