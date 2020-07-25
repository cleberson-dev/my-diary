<template>
  <div class="pagination">
    <router-link to="#" 
      :class="['previous', { invisible: !hasPrevious }]"
    >
      <icon-base direction="left" :width="16" :height="16"><icon-arrow /></icon-base>
      Anterior
    </router-link>
    <div class="info">
      Página {{ currentPage }} de {{ totalPages }}
    </div>
    <router-link 
      to="#" 
      :class="['next', { invisible: !hasNext }]"
    >
      Próximo
      <icon-base direction="right" :width="16" :height="16"><icon-arrow /></icon-base>
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
  props: {
    currentPage: Number,
    totalItems: Number,
    itemsPerPage: Number
  },
  computed: {
    totalPages() {
      console.log(this.currentPage, this.itemsPerPage);
      console.log(Math.ceil(this.totalItems / this.itemsPerPage));
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
    margin-right: 5px;
  }
  a.next svg {
    margin-left: 5px;
  }
</style>