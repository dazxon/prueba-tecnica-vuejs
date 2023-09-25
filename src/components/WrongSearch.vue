<script>
import { CustomButton } from '.'
export default {
  components: {
    CustomButton
  },
  methods: {
    clearError() {
      this.$emit('clearError')
    }
  }
}
</script>

<template>
  <div class="container">
    <h5>Uh-oh!</h5>
    <p>You look lost on your journey!</p>
    <div class="button">
      <CustomButton label="Go back home" @click="clearError" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h5 {
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0;
}

p {
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 40px;
}
</style>
