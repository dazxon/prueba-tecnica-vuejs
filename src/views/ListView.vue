<script>
import { WrongSearch, ListItem, BottomBar, LoadingPokeball, PokeModal } from '../components'
import axios from 'axios'
import { usePokeStore } from '../store'
import { computed } from 'vue'

export default {
  components: {
    BottomBar,
    ListItem,
    WrongSearch,
    LoadingPokeball,
    PokeModal
  },
  setup() {
    const pokeStore = usePokeStore()
    const actualPage = computed(() => pokeStore.actualPage)
    const pokeFavList = computed(() => pokeStore.pokeFav)

    return { actualPage, pokeFavList }
  },
  data() {
    return {
      pokemonList: [],
      query: '',
      searchBarError: null,
      searching: false,
      loadingMore: false,
      nextPageUrl: '',
      showModal: false,
      selectedPoke: ''
    }
  },
  created() {
    this.handleSearch()
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleSearch() {
      this.searching = true
      axios
        .get('https://pokeapi.co/api/v2/pokemon')
        .then((res) => {
          this.nextPageUrl = res.data.next
          this.pokemonList = res.data.results.map((e) => e.name)
          this.searching = false
        })
        .catch((err) => {
          this.searchBarError = true
          this.searching = false
          console.error('error ', err)
        })
    },
    searchPokemon(event) {
      const { value } = event.target
      if (value) {
        this.searching = true
        axios
          .get(`https://pokeapi.co/api/v2/pokemon/${value}`)
          .then((res) => {
            this.searching = false
            this.searchBarError = false
            this.showModal = true
            this.pokemonData = {
              img: res?.data?.sprites?.other?.dream_world?.front_default,
              name: res.data.name,
              weight: res.data.weight,
              height: res.data.height,
              types: res.data.types.map((e) => e.type.name)
            }
          })
          .catch((err) => {
            this.searchBarError = true
            this.searching = false
            console.error('error: ', err)
          })
          .finally(() => (this.searching = false))
      }
    },
    handleScroll() {
      if (
        !this.loadingMore &&
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 400 &&
        this.actualPage === 'pokemons'
      ) {
        this.loadMoreContent()
      }
    },
    async loadMoreContent() {
      this.loadingMore = true

      try {
        const res = await axios.get(this.nextPageUrl)
        this.pokemonList = this.pokemonList.concat(res.data.results.map((e) => e.name))
        this.nextPageUrl = res.data.next
        this.loadingMore = false
      } catch (err) {
        this.loadingMore = false
        console.error('error: ', err)
      }
    },
    closeModal() {
      this.showModal = false
    },
    clearError() {
      this.searchBarError = false
      this.searching = false
    }
  }
}
</script>

<template>
  <PokeModal :pokeData="pokemonData" :showModal="showModal" @close="closeModal" v-if="showModal" />
  <div class="container">
    <div class="search-bar">
      <span class="search-icon">
        <img src="../components/icons/lupaSearch.svg" alt="" />
      </span>
      <input type="text" placeholder="Search" @keyup.enter="(e) => searchPokemon(e)" />
    </div>
    <div class="container-items" v-if="!searchBarError && !searching">
      <ListItem
        v-for="pokemon in actualPage === 'pokemons' ? pokemonList : pokeFavList"
        :key="pokemon"
        :label="pokemon"
      />
    </div>
    <div v-if="searchBarError && !searching">
      <WrongSearch @clear-error="clearError" />
    </div>
    <LoadingPokeball v-if="searching" style="margin-top: 40px" />
  </div>
  <BottomBar />
</template>

<style scoped>
.container {
  margin: 0 auto;
  max-width: 70vw;
  margin-bottom: 120px;
}
.container-items {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.container-items {
  width: 100%;
}
.search-bar {
  margin-top: 20px;
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.04);
  border-radius: 5px;
  width: 100%;
  height: 50px;
  position: sticky;
  top: 0;
  background-color: #ffffff;
}

input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
}

.search-icon {
  color: #bfbfbf;
  padding: 0 10px;
}
</style>
