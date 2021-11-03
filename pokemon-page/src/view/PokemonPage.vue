<template>
  <div>
    <pokemonListItem :pokemons="Pokemons.results" />
  </div>
</template>

<script>
import pokemonListItem from "../components/pokemonListItem.vue";

export default {
  name: "PokemonPage",
  components: {
    pokemonListItem,
  },
  data() {
    return {
      pokemons: [],
    };
  },
  methods: {
    async fetchPokemons() {
      const axios = require("axios");
      try {
        const response = await axios.get("api/pokemon?limit=30");
        return response.data.results;
      } catch (error) {
        console.error(error);
      }
    },

    async getPokemonInfo() {
      this.pokemons = await this.fetchPokemons();
      // Extract ID from URL and add to every pokemon object
      this.pokemons = this.pokemons.map((pokemon) => ({
        ...pokemon,
        ID: pokemon.url
          .split("/")
          .slice(-2, -1)
          .toString(),
      }));
    },
  },
  computed:{
    Pokemons(){
      return this.$store.state.pokemons;
    },
  },
  async created() {
    await this.getPokemonInfo();
  },
  mounted(){
    this.$store.dispatch("fetchPokemons");
  },
};
</script>
