<template>
  <button
    @click="handleClick"
    :class="{ 'button-disabled': disabled, active: !disabled, default: true }"
  >
    <slot name="icon" class="container-icon"></slot>
    <span>
      {{ label }}
    </span>
  </button>
</template>

<script>
/**
 * Componente de botón reutilizable.
 *
 * Este componente proporciona un botón interactivo con una etiqueta y una ranura para un icono opcional.
 *
 * @component
 */
export default {
  /**
   * Propiedades del componente.
   * @prop {String} label - Texto del botón.
   * @prop {Boolean} disabled - Indica si el botón está deshabilitado.
   */
  props: {
    label: String,
    disabled: Boolean
  },
  methods: {
    handleClick() {
      try {
        if (this.disabled) {
          this.$emit('click')
        }
      } catch (error) {
        console.error('Error:', error)
      }
    }
  }
}
</script>

<style scoped>
.default {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f22539;
  color: #ffffff;
  border: none;
  border-radius: 60px;
  cursor: pointer;
  font-family: 'Lato', sans-serif;
  font-size: 18px;
  font-weight: 700;
  padding: 11px, 20px, 11px, 20px;
  gap: 10px;
  height: 44px;
  width: 100%;
  text-decoration: none;
}

.button-disabled {
  background-color: #bfbfbf;
}

.pressed {
  background-color: #c00e20;
}

.container-icon {
  padding-right: 10px;
}
</style>
