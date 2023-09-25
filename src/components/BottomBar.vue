<template>
  <div class="container-bar">
    <div class="container-bar-items">
      <CustomButton
        label="All"
        :disabled="actualPage !== 'pokemons'"
        @click="changePage('pokemons')"
      >
        <template #icon>
          <img src="../assets/iconListButton.svg" alt="" />
        </template>
      </CustomButton>
      <CustomButton
        label="Favorites"
        :disabled="actualPage !== 'favorites'"
        @click="changePage('favorites')"
      >
        <template #icon>
          <img src="../assets/starDefault.svg" alt="" />
        </template>
      </CustomButton>
    </div>
  </div>
</template>

<script>
import CustomButton from './CustomButton.vue'
import { usePokeStore } from '../store'
import { computed } from 'vue'

export default {
  components: {
    CustomButton
  },
  setup() {
    const pokeStore = usePokeStore()
    const actualPage = computed(() => pokeStore.actualPage)

    const changePage = (page) => {
      pokeStore.setActualPage(page)
    }

    return {
      changePage,
      actualPage
    }
  }
}
</script>

<style scoped>
.container-bar {
  position: fixed;
  bottom: 0;
  background-color: #ffffff;
  margin-top: 80px;
  width: 100%;
  box-shadow: 0px -5px 4px 0px rgba(0, 0, 0, 0.05);
}
.container-bar-items {
  max-width: 70vw;
  margin: 0 auto;
  display: flex;
  padding-left: 500px;
  justify-content: center;
  align-items: center;
  height: 80px;
  gap: 10px;
  padding: 10px 0;
  z-index: 999;
}

.button {
  display: inline;
  width: 100%;
}
</style>
