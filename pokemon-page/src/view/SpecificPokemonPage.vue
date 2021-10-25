<template>
    <div>
        <pokemon-details :pokemon="pokemon" />
    </div>
</template>

<script>
import pokemonDetails from '../components/pokemonDetails.vue'


export default {
    components: { pokemonDetails },
    data(){
        return{
            id:this.$route.params.id,
            pokemon:{}
        }
    },
    methods: {
        async fetchPokemonsDetails(){
            const axios = require('axios');
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon/' +this.id);
                return response.data
                
            } catch(error){
                console.error(error);
            }
        },

        async getPokemonDetails (){
            let {Name,id, abilities,moves,height,weight} = await this.fetchPokemonsDetails()
            this.pokemon ={Name,id, abilities,moves,height,weight};
        }
    },
    async created(){
        await this.getPokemonDetails()
    }
}
</script>