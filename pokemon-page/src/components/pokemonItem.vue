<template>
    <div @click="$emit('clicked',pokemon.ID)">
        <router-link :to="'/pokemon/' + pokemon.ID">
            <img :src="img" alt="">
            <p> #{{pokemon.ID}} </p>
            <p> {{pokemon.name}} </p>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'pokemonItem',
    props:{
        pokemon: Object,
    },
    data(){
        return{
            img:''
        }
    },
    created(){
        let ID = ('00'+this.pokemon['ID']).slice(-3)
        const imgLink = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${ID}.png`
        this.img= imgLink
    }
}
</script>

<style scoped>
div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: whitesmoke;
    border: 2px solid black;
    margin: 1rem;
}

div:hover{
    transform: scale(1.1);
    cursor: pointer;
}
</style>