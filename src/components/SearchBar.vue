<template>
  <div class="container">
    <span class="search-icon">
      <img src="../assets/lupaSearch.svg" alt="" />
    </span>
    <input
      type="text"
      placeholder="Search"
      v-model="query"
      @input="handleInputChange"
      @keyup.enter="searchPokemon"
    />
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      query: '',
      error: null
    }
  },
  methods: {
    handleInputChange() {},
    searchPokemon() {
      if (this.query) {
        axios
          .get(`https://pokeapi.co/api/v2/pokemon/${this.query}`)
          .then((res) => {
            this.$emit('search', res.data)
            this.error = null
          })
          .catch((err) => {
            this.error = err
            console.error('Error ', err)
          })
      }
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 5px;
  margin-top: 20px;
  width: 100%;
}

input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
}

.search-icon {
  padding: 5px;
  color: #bfbfbf;
}
</style>
