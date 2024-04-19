import { api } from "~/trpc/react";


export default function Pokemons() {
    const {data:pokemons,isLoading,isError} = api.pokemons.getLatest.useQuery();

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error</div>
    return (
        <>
			{pokemons.length ?
				pokemons.map((pokemon) => {
					return <Pokemon key={pokemon.id} pokemons={pokemon} />
				})
				: "Create your first todo..."}
		</>
    )
}