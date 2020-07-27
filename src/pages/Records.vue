<template>
  <main>
    <h1 class="title">Meus Registros</h1>
    <record-list :records="records" />
    <pagination
      :current-page="1"
      :total-items="100"
      :items-per-page="10"
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
    ...mapGetters({ records: 'allRecords' })
  }
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