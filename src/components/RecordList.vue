<template>
  <ul v-if="records">
    <record-item
      v-for="record in records"
      :key="record.id"
      :title="record.title"
      :postedAt="record.postedAt"
      :mood="record.mood"
      :tasks="record.tasks"
    />
  </ul>
</template>

<script>
import RecordItem from './RecordItem';

export default {
  components: {
    RecordItem
  },
  props: {
    records: Array
  }
}
</script>

<style scoped>
ul {
  padding-left: 0;
}

ul > li {
  margin-bottom: 10px;
}
</style>