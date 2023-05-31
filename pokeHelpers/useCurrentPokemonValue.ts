import { useMeshLocation } from "@uniformdev/mesh-sdk-react";
import { PokemonListItem } from "./usePokemonList";

export function useCurrentPokemonValue() {
  const { value, setValue } = useMeshLocation("dataResource");

  const selectedPokemon = value?.Name;
  const setSelectedPokemon = (pokemon: PokemonListItem | null) => {
    setValue((prev) => ({ newValue: { ...prev, Name: pokemon?.name || '' } }));
  };

  return [selectedPokemon, setSelectedPokemon] as const;
}
