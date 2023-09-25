import { defineStore } from 'pinia'

export const usePokeStore = defineStore('app', {
  state: () => ({
    actualPage: 'pokemons',
    pokeFav: []
  }),
  actions: {
    setActualPage(page) {
      this.actualPage = page
    },
    isFavorite(pokemon) {
      return this.pokeFav.includes(pokemon)
    },
    toggleFavorite(pokemon) {
      if (this.isFavorite(pokemon)) {
        this.pokeFav.splice(this.pokeFav.indexOf(pokemon), 1)
      } else {
        this.pokeFav.push(pokemon)
      }

      localStorage.setItem('pokeFav', JSON.stringify(this.pokeFav))
    },
    initStore() {
      const storedPokeFav = localStorage.getItem('pokeFav')
      if (storedPokeFav) {
        this.pokeFav = JSON.parse(storedPokeFav)
      }
    }
  },
  getters: {
    getPage: (state) => state.actualPage
  }
})
