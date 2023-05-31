import {
  Chip,
  HorizontalRhythm,
  VerticalRhythm,
} from "@uniformdev/design-system";
import { type Pokemon } from "./usePokemon";

export function PokeInfo({ selectedPokemon }: { selectedPokemon: Pokemon | undefined }) {
  if (!selectedPokemon) {
    return null;
  }

  return (
    <HorizontalRhythm gap="2xl">
      <img src={selectedPokemon.sprites.front_default} />

      <VerticalRhythm gap="xs">
        <div>Type</div>
        {selectedPokemon.types.map((type) => (
          <Chip
            size="xs"
            key={type.type.name}
            text={type.type.name[0].toUpperCase() + type.type.name.slice(1)}
            theme="accent-dark"
          />
        ))}
      </VerticalRhythm>

      <VerticalRhythm gap="xs">
        <span>{selectedPokemon.abilities.length} abilities</span>
        <span>{selectedPokemon.moves.length} moves</span>
      </VerticalRhythm>
    </HorizontalRhythm>
  );
}
