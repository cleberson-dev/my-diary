<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Olá, mundinho</h1>
    <p>Counter: <span>{{ counter }}</span></p>
    <button @click="increment">+</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    increment() {
      this.$store.commit('increment');
    }
  },
  computed: {
    counter() {
      return this.$store.getters.counter;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
