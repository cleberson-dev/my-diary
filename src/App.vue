<template>
  <div id="app">
    <header>
      <nav>
        <nav-link path="/" title="Início">
          <icon-base><icon-home /></icon-base>
        </nav-link>
        <nav-link path="/registros" title="Registros">
          <icon-base><icon-book /></icon-base>
        </nav-link>
      </nav>
      <real-datetime></real-datetime>
    </header>
    
    <router-view />
  </div>
</template>

<script>
import NavLink from "./components/NavLink";
import RealDatetime from "./components/RealDatetime";

import IconBase from './components/IconBase';
import IconBook from './components/icons/IconBook';
import IconHome from './components/icons/IconHome';

export default {
  name: "App",
  components: {
    NavLink,
    RealDatetime,

    IconBase,
    IconBook,
    IconHome
  }
};
</script>

<style>
#app {
  font-family: "Montserrat", sans-serif;
  color: #554967;
  font-size: 0.8rem;
}

header {
  padding: 1rem 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header > nav {
  display: flex;
}

nav > a {
  margin-right: 8px;
}
</style>
