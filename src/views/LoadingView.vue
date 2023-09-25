<script>
import LoadingPokeball from '../components/LoadingPokeball.vue'

export default {
  components: {
    LoadingPokeball
  },
  mounted() {
    setTimeout(() => {
      this.$router.push('/pokemons')
    }, 2000)
  }
}
</script>
<template>
  <div>
    <LoadingPokeball />
  </div>
</template>
<style scoped>
div {
  height: 100vh;
}
</style>
