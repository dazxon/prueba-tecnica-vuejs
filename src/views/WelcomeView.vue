<script>
import { HelloPikachu } from '../components'
import CustomButton from '../components/CustomButton.vue'

export default {
  components: {
    HelloPikachu,
    CustomButton
  },
  data() {
    return {
      buttonText: 'Get started'
    }
  }
}
</script>
<template>
  <main class="container">
    <div>
      <HelloPikachu />
    </div>
    <div>
      <h3>Welcome to pokedex</h3>
      <p>
        The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the
        Pokemon World
      </p>
    </div>
    <div class="button">
      <router-link to="/loading">
        <CustomButton :label="buttonText" :disabled="false" />
      </router-link>
    </div>
    <PokeModal />
  </main>
</template>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100dvh;
  font-family: 'Lato', sans-serif;
  margin: 0 10px;
}

h3 {
  font-weight: 700;
  font-size: 26px;
  color: #353535;
}

p {
  font-weight: 500;
  font-size: 18px;
  color: #5e5e5e;
}

.button {
  width: 155px;
}
</style>
