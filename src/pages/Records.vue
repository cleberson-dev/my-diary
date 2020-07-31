<template>
  <main>
    <h1 class="title">Meus Registros</h1>
    <record-list :records="records" />
    <pagination
      :current-page="currentPage"
      :total-items="recordsCount"
      :items-per-page="itemsPerPage"
    />
  </main>
</template>

<script>
import { mapGetters } from 'vuex';

import RecordList from '../components/RecordList';
import Pagination from '../components/Pagination';

export default {
  name: 'RecordsPage',
  components: {
    RecordList,
    Pagination
  },
  computed: {
    ...mapGetters(['recordsByPage', 'recordsCount', ]),
    records() {
      return this.recordsByPage(this.currentPage, this.itemsPerPage);
    },
    currentPage() {
      const page = Number(this.$route.query.p);

      if (Number.isNaN(page)) return 1;
      return page; 
    },
    itemsPerPage() {
      const defaultValue = 3;
      const max = 10;
      const queryAmount = Number(this.$route.query.amount);

      if (Number.isNaN(queryAmount) || queryAmount <= 0) return defaultValue;
      if (queryAmount > max) return max;
      
      return queryAmount;
    }
  },
}
</script>

<style scoped>
  main > .title {
    margin-left: 1.25rem;
  }

  main > .pagination {
    margin: 1rem 0;
  }
</style>