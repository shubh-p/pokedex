import {z} from "zod";

export const pokemonInput = z.string({
    required_error: "Name is required"
}).min(1);