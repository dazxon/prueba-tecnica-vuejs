<template>
  <div @click="handleToggleFav()">
    <img v-if="handleIsFav()" src="../assets/starEnabled.svg" alt="" />
    <img v-else src="../assets/starDisabled.svg" alt="" />
  </div>
</template>

<script>
import { usePokeStore } from '../store'

export default {
  props: {
    pokemon: ''
  },
  methods: {
    handleToggleFav() {
      const pokeStore = usePokeStore()
      pokeStore.toggleFavorite(this.pokemon)
    },
    handleIsFav() {
      const pokeStore = usePokeStore()
      return pokeStore.isFavorite(this.pokemon)
    }
  }
}
</script>
