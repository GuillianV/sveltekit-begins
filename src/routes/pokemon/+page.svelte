<script>
    export let data;
    const pokemon = data.pokemon
</script>

<h1>Pokemon {pokemon.name}</h1>
<img src={pokemon.sprites.front_default} alt={pokemon.name} />