import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

import { pokemonInput } from "~/types";
export const pokemonsRouter = createTRPCRouter({
  get_pokemon: publicProcedure.input(pokemonInput).query(async({ ctx,input }) => { 
    // const pokemons = await ctx.prisma.pokemons.findMany({
    //     where:{
    //         name: ctx.prisma.pokemons.name,
    //     },
    // });
    // return pokemons.map(({id,name,types,sprite}) => ({id,name,types,sprite}));

    const name = input;

    // Assuming ctx.prisma is available
    const pokemon = await ctx.db.pokemons.findFirst({
      where: {
        name: name
      },
    });   
    return pokemon;
    // return {id:"1",name:"bulbasaur",types:["grass","poison"],sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"};
      }),

  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.pokemons.findFirst({
      orderBy: { createdAt: "desc" },
    });
  }),
});
