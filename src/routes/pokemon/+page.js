export const load = async (loadEvent) =>{

    const { fetch } = loadEvent;
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/turtwig');
    let pokemon = await response.json();
    return {
        pokemon
    }
}