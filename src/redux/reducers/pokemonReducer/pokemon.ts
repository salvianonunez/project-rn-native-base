import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PokemonState } from "./pokemon.Interface";
import { Pokemon, PokemonDetail } from "../../../interfaces/pokemon";

const initialState: PokemonState ={
  isLoading: false,
  pokemons: [],
  pokemonDetail: {
    abilities: [],
    base_experience: 0
  },
  pokemonSelected: {
    name: '',
    url: '',
  },
}

const pokemonSlice = createSlice({
  initialState,
  name: 'pokemon',
  reducers: {
    setPokemonList: (state: PokemonState, action: PayloadAction<Pokemon[]>) =>{
      state.pokemons=action.payload;
    },
    setPokemonSelected: (state: PokemonState, action: PayloadAction<Pokemon>)=>{
      state.pokemonSelected=action.payload;
    },
    setIsLoading: (state: PokemonState, action: PayloadAction<boolean>)=>{
      state.isLoading=action.payload;
    },
    setPokemonDetail: (state:PokemonState, action: PayloadAction<PokemonDetail>) =>{
      state.pokemonDetail=action.payload;
    }
  },
});

export const {setPokemonList, setPokemonSelected, setIsLoading, setPokemonDetail} = pokemonSlice.actions;
const pokemonReducer = pokemonSlice.reducer;
export default pokemonReducer;
