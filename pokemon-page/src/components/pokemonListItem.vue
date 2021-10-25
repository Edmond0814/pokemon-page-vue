<template>
<div class="pokemon-grid">
    <div :key="pokemon.name" v-for="pokemon in pokemons">
        <pokemon-item :pokemon="pokemon" />
    </div>
</div>
</template>

<script>
import PokemonItem from './pokemonItem.vue'

export default { 
    name:'pokemonListItem',
    props:{
        pokemons:Array,
    },
    components:{
        PokemonItem,      
    },
    created(){
        console.log("testing");
    }
}
</script>

<style scoped>
.pokemon-grid{
    width: 90%;
    max-width: 1300px;
    margin:0 auto;
    padding-top: 12vh;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    align-items: center;
    row-gap: 2rem;
}
</style>