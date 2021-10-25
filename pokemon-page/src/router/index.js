import Home from '../view/Home.vue';
import PokemonPage from '../view/PokemonPage.vue';
import SpecificPokemonPage from '../view/SpecificPokemonPage.vue'

export default [
  {
    path: '/',
    redirect:'/Home',
  },
  {
    path: '/Home',
    component: Home,
  },
  {
    path: '/pokemon',
    component: PokemonPage,
  },
  {
    path: '/pokemon/:id',
    name:'specificpokemonpage',
    component: SpecificPokemonPage,
  }
]