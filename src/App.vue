<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Olá, mundinho</h1>
    <p>Counter: <span>{{ counter }}</span></p>
    <button @click="increment">+</button>

    <nav>
      <h3>Navbar</h3>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <div class="page-area">
      <h3>Page Area</h3>
      <router-view></router-view>
    </div>
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

nav > a {
  margin-right: 5px;
}

.page-area {
  padding: 1rem;
  border: 1px dotted red;
  margin-top: 1rem;
}
</style>
