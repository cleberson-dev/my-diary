<template>
  <main class="record-details">
    <h1 class="record-title">{{record.title}}</h1>
    <time>{{formattedDate}}</time>
    <p>{{record.content}}</p>
    <div class="mood">
      <h4 class="sub-title">Humor</h4>
      <p>
        <img 
          :src="'/img/moods/' + record.mood + '.svg'" 
          class="mood-icon"
        />
        {{formattedMood}}
      </p>
    </div>
    <ul v-if="record.tasks.length > 0">
      <h4 class="sub-title">
        Atividades
        <span>({{completedTasks}}/{{totalTasks}})</span>
      </h4>
      <li
        v-for="task in record.tasks"
        :key="task.id"
        :class="['task', { completed: task.completed }]"
      >{{task.title}}</li>
    </ul>
  </main>
</template>

<script>
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

export default {
  computed: {
    record() {
      const { id } = this.$route.params;
      
      return this.$store.getters.record(Number(id));
    },
    formattedDate() {
      const formatText = "d 'de' MMMM 'de' yyyy";
      return format(
        this.record.postedAt, 
        formatText, 
        { locale: ptBR }
      );
    },
    completedTasks() {
      return this.record.tasks.reduce((prev, cur) => {
        if (!cur.completed) return prev;
        return prev + 1;
      }, 0);
    },
    totalTasks() {
      return this.record.tasks.length;
    },
    formattedMood() {
      const formattedMoods = {
        happy: 'Feliz',
        sad: 'Triste',
        angry: 'Bravo',
        tired: 'Cansado'
      }
      
      return formattedMoods[this.record.mood];
    }
  }
};
</script>

<style scoped>
main {
  padding: 1rem 1.25rem;
}

ul {
  margin-left: 0;
  padding-left: 0;
}

ul > .task {
  margin-bottom: 5px;
}
.task {
  list-style: none;
  background-color: #F8F5FF;
  padding: 10px;
  width: fit-content;
  border-radius: 4px;
}

.task.completed {
  background-color: #9C89B8;
  color: #FCFBFF;
}

.sub-title {
  color: #B8BEDD;
}

main .sub-title {
  margin-top: 1.2rem;
  margin-bottom: 8px;
}

.mood-icon {
  width: 2.5rem;
  height: 2.5rem;
}

time {
  font-weight: 700;
  color: #B8BEDD;
}

.record-title {
  margin: 0;
}

main > .record-title {
  margin-bottom: 5px;
}
</style>