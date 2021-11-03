import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state:{
    pokemons:[],
  },

  actions:{
    async fetchPokemons({commit}){
      const response = await axios.get("api/pokemon")
      commit('setPokemons',response.data)
    },
  },

  mutations:{
    setPokemons(state,pokemons){
      state.pokemons = pokemons
    },
  },
})