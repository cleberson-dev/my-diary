<template>
  <div class="pagination">
    <router-link :to="previousUrl" 
      :class="['previous', { invisible: !hasPrevious }]"
    >
      <icon-base direction="left" :width="iconSize" :height="iconSize"><icon-arrow /></icon-base>
      Anterior
    </router-link>
    <div class="info">
      Página {{ currentPage }} de {{ totalPages }}
    </div>
    <router-link 
      :to="nextUrl" 
      :class="['next', { invisible: !hasNext }]"
    >
      Próximo
      <icon-base direction="right" :width="iconSize" :height="iconSize"><icon-arrow /></icon-base>
    </router-link>
  </div>
</template>

<script>
import IconBase from './IconBase';
import IconArrow from './icons/IconArrow';

export default {
  name: 'Pagination',
  components: {
    IconBase,
    IconArrow
  },
  data() {
    return {
      iconSize: 18,
    }
  },
  props: {
    currentPage: Number,
    totalItems: Number,
    itemsPerPage: Number
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    },
    hasPrevious() {
      return this.currentPage > 1;
    },
    hasNext() {
      return this.currentPage < this.totalPages;
    },
    previousPage() {
      return this.currentPage - 1;
    },
    nextPage() {
      return this.currentPage + 1;
    },
    previousUrl() {
      return `?p=${this.previousPage}&amount=${this.itemsPerPage}`;
    },
    nextUrl() {
      return `?p=${this.nextPage}&amount=${this.itemsPerPage}`;
    }
  }
}
</script>

<style scoped>
  .pagination {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.25rem;
    font-size: 0.7rem;
  }

  .pagination > a {
    text-decoration: none;
    display: flex;
    align-items: center;
    color: #554967;
  }

  a.invisible {
    visibility: hidden;
  }

  a.previous svg {
    margin-right: 6px;
  }
  a.next svg {
    margin-left: 6px;
  }
</style>