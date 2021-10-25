import Home from '../view/Home.vue';
import PokemonPage from '../view/PokemonPage.vue';
import SpecificPokemonPage from '../view/SpecificPokemonPage.vue'

export default [
  {
    path: '/Home',
    component: Home,
  },
  {
    path: '/pokemonpage',
    component: PokemonPage,
  },
  {
    path: '/pokemonpage/specificpokemonpage',
    component: SpecificPokemonPage,
  }
]