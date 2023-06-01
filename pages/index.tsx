import { DataResourceDynamicInputProvider, InputVariables, LoadingOverlay } from "@uniformdev/mesh-sdk-react";
import type { NextPage } from "next";
import { usePokemonList } from "../pokeHelpers/usePokemonList";
import { PokeSelector } from "../pokeHelpers/PokeSelector";
import { useCurrentPokemonValue } from "../pokeHelpers/useCurrentPokemonValue";
import { PokeInfo } from "../pokeHelpers/PokeInfo";
import { VerticalRhythm } from "@uniformdev/design-system";
import { usePokemon } from "../pokeHelpers/usePokemon";

const PokemonDataResourceEditor: NextPage = () => {
  const { isLoading, data } = usePokemonList();

  const [selectedPokemon, setSelectedPokemon] = useCurrentPokemonValue();

  const { data: currentPokemonDetails } = usePokemon(selectedPokemon);

  if (isLoading) {
    return <LoadingOverlay isActive />;
  }

  return (
    // the minHeight works around iframe auto-resizing issues with the react-select component's positioning
    <DataResourceDynamicInputProvider>
      <VerticalRhythm style={{ minHeight: "250px" }}>
        <InputVariables
          label="Pokemon Name"
          onChange={(value) => {
            setSelectedPokemon({ name: value, url: "" });
          }}
          value={selectedPokemon}
          inputWhenNoVariables={
            <PokeSelector
              pokemon={data?.results}
              selectedPokemon={selectedPokemon}
              setSelectedPokemon={setSelectedPokemon}
            />
          }
        />
        <PokeInfo selectedPokemon={currentPokemonDetails} />
      </VerticalRhythm>
    </DataResourceDynamicInputProvider>
  );
};

export default PokemonDataResourceEditor;
