<template>
  <div>
    <pokemon-details :pokemon="pokemon" />
  </div>
</template>

<script>
import pokemonDetails from "../components/pokemonDetails.vue";

export default {
  components: { pokemonDetails },
  data() {
    return {
      id: this.$route.params.id,
      pokemon: {},
    };
  },
  methods: {
    async fetchPokemonsDetails() {
      const axios = require("axios");
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon/" + this.id
        );
        return response.data;
      } catch (error) {
        console.error(error);
      }
    },
    addImgURL() {
      this.pokemon.IDs = ("00" + this.pokemon["id"]).slice(-3);
      const imgLink = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${this.pokemon.IDs}.png`;
      this.pokemon["imgURL"] = imgLink;
    },
    removePokemonMoves() {
      this.pokemon.moves = this.pokemon.moves.slice(0, 4);
    },
    async getPokemonDetails() {
      let {
        name,
        id,
        abilities,
        moves,
        height,
        weight,
      } = await this.fetchPokemonsDetails();
      this.pokemon = { name, id, abilities, moves, height, weight };
      this.removePokemonMoves();
      this.addImgURL();
    },
  },
  async created() {
    await this.getPokemonDetails();
  },
};
</script>
