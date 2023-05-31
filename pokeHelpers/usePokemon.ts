import { useMeshLocation } from "@uniformdev/mesh-sdk-react";
import { useQuery } from "react-query";

export type Pokemon = {
  name: string;
  types: Array<{ type: { name: string } }>;
  moves: Array<unknown>;
  abilities: Array<unknown>;
  sprites: {
    front_default: string;
  };
};

export function usePokemon(name: string | undefined) {
  const { getDataResource } = useMeshLocation("dataResource");

  return useQuery({
    queryKey: ["pokemon", name],
    enabled: !!name,
    queryFn: async () =>
      // fetch the pokemon details from the same API as our data source
      // (/api/v2/pokemon/name)
      await getDataResource<Pokemon>({
        method: "GET",
        // !! this is relative to the base URL of the data source
        // that this data resource is attached to, to prevent you from
        // sending credentials elsewhere other than its API
        path: `/pokemon/${name}`,
      }),
  });
}
