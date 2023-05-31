import { useMeshLocation } from "@uniformdev/mesh-sdk-react";
import { useQuery } from "react-query";

export type PokemonListItem = {
  name: string;
  url: string;
};

export function usePokemonList() {
  const { getDataResource } = useMeshLocation("dataResource");

  return useQuery({
    queryKey: "pokemon-list",
    queryFn: async () =>
      // fetch the pokemon list from the same API as our data source
      // (/api/v2/pokemon?limit=1300)
      await getDataResource<{
        results: Array<PokemonListItem>;
      }>({
        method: "GET",
        // !! this is relative to the base URL of the data source
        // that this data resource is attached to, to prevent you from
        // sending credentials elsewhere other than its API
        path: "/pokemon",
        parameters: [{ key: "limit", value: "1300" }],
      }),
  });
}
