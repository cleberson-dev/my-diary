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
import RecordList from '../components/RecordList';
import Pagination from '../components/Pagination';

export default {
  name: 'RecordsPage',
  components: {
    RecordList,
    Pagination
  },
  data() {
    return {
      records: [
        { 
          id: 1,
          title: 'Estresse é sempre presente',
          postedAt: new Date(),
          mood: 'happy',
          tasks: { completed: 5, total: 10 }
        },
        { 
          id: 2,
          title: 'Estresse é sempre presente',
          postedAt: new Date(),
          mood: 'sad',
          tasks: { completed: 1, total: 2 }
        },
        { 
          id: 3,
          title: 'Estresse é sempre presente',
          postedAt: new Date(),
          mood: 'tired',
          tasks: { completed: 3, total: 10 }
        },
        { 
          id: 4,
          title: 'Estresse é sempre presente',
          postedAt: new Date(),
          mood: 'sad',
          tasks: { completed: 6, total: 6 }
        },
        { 
          id: 5,
          title: 'Estresse é sempre presente',
          postedAt: new Date(),
          tasks: { completed: 2, total: 4 }
        },
      ]
    }
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