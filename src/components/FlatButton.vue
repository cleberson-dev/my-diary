<template>
  <button 
    :style="{ backgroundColor: bkgColor }"
    :class="{ extended: isExtended }"
    @click="$emit('click', $event)"
  >
    <slot />
    {{ title }}
  </button>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    bkgColor: {
      type: String,
      default: '#9C89B8'
    },
    isExtended: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
  button {
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    padding: 0.6rem 0.8rem;
    outline: none;
    border: none;
    border-radius: 0.75rem;
    display: flex;
    align-items: center;
  }

  button > svg {
    margin-right: 5px;
  }

  button.extended {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>