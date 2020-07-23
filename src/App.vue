<template>
  <div id="app">
    <header>
      <nav>
        <nav-link path="/" title="Início">
          <!-- <icon-base icon-color="red" icon-name="book">
            <icon-book />
          </icon-base> -->
        </nav-link>
        <nav-link path="/registros" title="Registros">
          <!-- <icon-base icon-color="blue" icon-name="book">
            <icon-book />
          </icon-base> -->
        </nav-link>
      </nav>
    </header>
  </div>
</template>

<script>
// import IconBase from './components/IconBase';
// import IconBook from './components/icons/IconBook';
import NavLink from './components/NavLink';

export default {
  name: 'App',
  components: {
    // IconBase,
    // IconBook,
    NavLink
  },
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
  color: #554967;
  font-size: 0.8rem;
}

header {
  padding: 1rem;
}

nav > a {
  margin-right: 8px;
}
</style>
