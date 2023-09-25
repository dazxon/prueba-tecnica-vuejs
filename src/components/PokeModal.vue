<template>
  <div v-if="showModal" class="modal-overlay">
    <div class="modal">
      <div class="close-icon">
        <img src="../assets/icon-close.svg" alt="" @click="closeModal" />
      </div>
      <div class="div-poke">
        <img :src="pokeData?.img" alt="" class="img-poke" />
      </div>

      <div class="modal-body">
        <p>
          Name:
          <span class="poke-data">{{ pokeData?.name }}</span>
        </p>
        <hr />

        <p>
          Weight: <span class="poke-data">{{ pokeData?.weight }}</span>
        </p>
        <hr />

        <p>
          Height: <span class="poke-data">{{ pokeData?.height }}</span>
        </p>
        <hr />
        <p>
          Types:
          <span class="poke-data">{{ pokeData?.types.join(', ') }}</span>
        </p>
        <hr />

        <div class="modal-footer">
          <CustomButton
            label="Share to my friends"
            style="max-width: 195px"
            @click="copyToClipboard"
          />
          <CustomStar :pokemon="pokeData?.name" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CustomButton } from '.'
import CustomStar from './CustomStar.vue'

export default {
  props: {
    showModal: Boolean,
    pokeData: Object
  },
  methods: {
    closeModal() {
      this.$emit('close')
    },
    async copyToClipboard() {
      try {
        const text = JSON.stringify(this.pokeData, null, 2)
        await navigator.clipboard.writeText(text)
      } catch (err) {
        console.error('Error: ', err)
      }
    }
  },
  components: { CustomButton, CustomStar }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  margin: 0 20px;
  position: relative;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 570px;
}

.div-poke {
  background: url(../assets/bg-poke.svg);
  width: 100%;
  height: 220px;
  display: flex;
  justify-content: center;
}

.img-poke {
  padding-top: 20px;
  width: 180px;
  height: 180px;
}

p {
  color: #5e5e5e;
  font-weight: 700;
  font-size: 18px;
  text-transform: capitalize;
}

.poke-data {
  font-weight: 500;
}

hr {
  height: 1px;
  color: #e8e8e8;
  background-color: #e8e8e8;
  border: none;
  margin: 10px 0;
}

.modal-body {
  padding: 20px;
}

.modal-footer {
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
}

.close-icon {
  position: absolute;
  right: 5px;
  top: 5px;
  cursor: pointer;
}
</style>
