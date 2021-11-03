import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state:{
    pokemonsDetails:[],
  },

  actions:{
    async getPokemonsDetails({dispatch}){
      let pokemonsURL = await dispatch("fetchPokemonsURL")
      console.log(pokemonsURL);

      // for (let pokemonURL in pokemonsURL){
      //   let response = await axios.get(pokemonURL)
      //   commit('setPokemonDetails',response.data)
      // }

      pokemonsURL.forEach(pokemonURL=>{
        dispatch("fetchPokemonsDetails",pokemonURL)
      })
    },
    async fetchPokemonsURL(){
      const response = await axios.get("api/pokemon?limit=30")
      let pokemons = response.data
      return pokemons.results.map(pokemon=>pokemon.url)
    },
    async fetchPokemonsDetails({commit},pokemonURL){
      const response = await axios.get(pokemonURL)
      commit('setPokemonDetails',response.data)
    },
  },

  mutations:{
    setPokemonDetails(state,pokemonDetails){
      let {
            name,
            id,
            abilities,
            moves,
            height,
            weight,
          } = pokemonDetails;
      moves = moves.slice(0,4);
      let pokemon = {
                      name,
                      id,
                      abilities,
                      moves,
                      height,
                      weight,
                    }
      state.pokemonsDetails.push(pokemon)
    },
    threeDigitId(state){
      state["threeDigitId"]= ("00" + state.pokemons["ID"]).slice(-3)
    }
  },
})