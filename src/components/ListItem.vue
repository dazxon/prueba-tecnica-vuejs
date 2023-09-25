<template>
  <div class="container-item">
    <span class="capitalize">{{ label }}</span>
    <CustomStar :pokemon="label" :fav="handleIsFav()" />
  </div>
</template>

<script>
import CustomStar from './CustomStar.vue'
import { usePokeStore } from '../store'

export default {
  components: {
    CustomStar
  },
  props: {
    label: String
  },
  methods: {
    handleToggleFav() {
      const pokeStore = usePokeStore()
      pokeStore.toggleFavorite(this.label)
    },
    handleIsFav() {
      const pokeStore = usePokeStore()
      return pokeStore.isFavorite(this.label)
    }
  }
}
</script>

<style scoped>
.container-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0 0 5px rgba(249, 249, 249, 0.8);
  padding: 5px 20px;
}
</style>
