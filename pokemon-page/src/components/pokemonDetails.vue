<template>
    <div class="pokemon">
        <div class="idname">
            <div class="id">#{{ID}}</div>
            <div class="name">{{pokemon.name}}</div>
        </div>
        <img :src="img" alt="">
        <div class="info">
            <div class="size">
                <div class="weight">{{pokemon.weight}}KG</div>
                <div class="height">{{pokemon.height}}INCH</div>
            </div>
            <div class="skills">
                <div class="abilitybox">
                    <p>Abilities</p>
                    <div :key="Ability.slot" v-for="Ability in pokemon.abilities" class="abilities">
                        <p class="ability">{{Ability['ability']['name']}}</p>
                    </div>
                </div>
                <div class="movesbox">
                    <p>Moves</p>
                    <div :key="Move.url" v-for="Move in pokemon.moves.slice(0,4)" class="move">
                        <p class="move"> {{Move['move']['name']}} </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        pokemon:Object,
    },
    data(){
        return{
            img:'',
            ID:''
        }
    },
    created(){
        this.ID = ('00'+this.pokemon['id']).slice(-3)
        const imgLink = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${this.ID}.png`;
        this.img= imgLink
    }
}
</script>

<style scoped>
.info{
    margin: 0 auto;
    margin-top: -25px;
    text-align: center;
}
.abilitybox{
    font-size: 30px;
    background-color: teal;
    padding: 1rem 0;
    border-radius: 25px;
    margin: 1rem 2rem;
    width: 250px;
}
.movesbox{
    font-size: 30px;
    background-color: teal;
    padding: 1rem 0;
    border-radius: 25px;
    margin: 1rem 2rem;
    width: 400px;
}
.abilities{
    line-height: 4rem;
    margin: 0.5rem 0.5rem;
    text-align: left;
}
.move{
    margin: 0.5rem 0.5rem;
    text-align: left;
}
.moves{
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 3rem;
    text-align: center;
    margin: 0.5rem auto;
    justify-content: space-around;
}
.idname{
    display: flex;
    align-items: center;
}

.skills{
    width: 90vw;
    display: flex; 
    justify-content: space-around;
    max-width: 1000px;
}
.size{
    margin-top: 2rem;
    display: flex;
    justify-content: space-around;
    max-width: 1200px;
}
.pokemon{
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 25px;
    padding-top: 75px;
}
</style>