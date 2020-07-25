<template>
  <main>
    <h1 class="title">Meus Registros</h1>
    <record-list :records="records" />
  </main>
</template>

<script>
import RecordList from '../components/RecordList';

export default {
  name: 'RecordsPage',
  components: {
    RecordList
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
</style>