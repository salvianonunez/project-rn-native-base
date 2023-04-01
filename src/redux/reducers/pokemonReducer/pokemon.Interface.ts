import { Pokemon, PokemonDetail } from "../../../interfaces/pokemon";

export interface PokemonState {
  pokemons:Pokemon[];
  pokemonSelected:Pokemon;
  pokemonDetail: PokemonDetail;
  isLoading: boolean;
}