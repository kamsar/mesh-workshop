import Select, { createFilter } from "react-select";
import { PokemonListItem } from "./usePokemonList";

export function PokeSelector({
  pokemon,
  selectedPokemon,
  setSelectedPokemon,
}: {
  pokemon?: Array<PokemonListItem>;
  selectedPokemon?: string;
  setSelectedPokemon: (pokemon: PokemonListItem | null) => void;
}) {
  return (
    <Select<PokemonListItem>
      name="color"
      value={pokemon?.find((poke) => poke.name === selectedPokemon)}
      placeholder="Select a Pokemon"
      options={pokemon}
      // teach it how to deal with custom objects
      formatOptionLabel={(poke) =>
        poke.name ? poke.name[0].toUpperCase() + poke.name.slice(1) : poke.name
      }
      isOptionSelected={(option) => option.name === selectedPokemon}
      filterOption={createFilter({ stringify: (poke) => poke.data.name })}
      isLoading={!pokemon}
      onChange={setSelectedPokemon}
    />
  );
}
