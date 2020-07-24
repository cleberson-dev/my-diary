<template>
  <router-link :to="path">
    <slot />
    <div>
      {{title}}
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    path: String,
    title: String
  }
}
</script>

<style scoped>
  a {
    text-decoration: none;
    color: #554967;
  }
</style>