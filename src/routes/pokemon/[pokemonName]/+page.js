import { error } from "@sveltejs/kit";

export const load = async (loadEvent) =>{

    const { fetch, params } = loadEvent;
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+params.pokemonName);

    if (response.status != 200) {

        throw error(response.status,{
            message:'Pokemon name not found'
        })
        
        
    }
    
    let pokemon = await response.json();
    return {
        pokemon
    }
}

export let ssr = true;
export let csr = false;