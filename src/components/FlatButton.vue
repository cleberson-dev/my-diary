<template>
  <button 
    :style="{ backgroundColor: bkgColor }" 
    @click="$emit('click', $event)"
  >
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
    }
  }
}
</script>

<style scoped>
  button {
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    padding: 0.8rem 1.5rem;
    outline: none;
    border: none;
    border-radius: 0.75rem;
  }
</style>