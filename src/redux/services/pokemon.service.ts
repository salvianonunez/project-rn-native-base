import axios from 'axios';
import { POKEMONS_URL } from '../../config/config.api';
import { Pokemon } from '../../interfaces/pokemon';
import { setIsLoading, setPokemonDetail, setPokemonList, setPokemonSelected } from '../reducers/pokemonReducer/pokemon';
import { useDispatch } from 'react-redux';

export const fetchPokemons = () => async (dispatch: Function) => {
  dispatch(setIsLoading(true));
  try {
    const response = await axios.get(POKEMONS_URL);
    dispatch(setPokemonList(response.data.results));
    response.data.results;
  } catch (error) {
    console.log('error', error);
    dispatch(setPokemonList([]))
  }
  dispatch(setIsLoading(false));
};

export const fetchPokemon = (url: string) => async (dispatch:Function) =>{
  try {
    const response = await axios.get(url);
    dispatch(setPokemonDetail(response.data));   
  } catch (error) {
    dispatch(setPokemonDetail({
      abilities: [],
      base_experience:0,
    }))
  }
}