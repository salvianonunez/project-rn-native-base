export interface Pokemon {
  name: string;
  url: string;

}

export interface PokemonDetail{
  abilities: Ability[];
  base_experience: number;
}

interface Ability {
  ability: {
    name: string;
    url: string;
  }
}