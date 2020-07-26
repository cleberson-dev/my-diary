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
  data() {
    return {
      record: {
        id: 10,
        title: "Estresse é sempre presente",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et commodo tortor, ac ornare nunc. Morbi nulla sem, dignissim interdum finibus vitae, facilisis egestas ante. Quisque ut turpis in nibh malesuada congue at sit amet ex. Vivamus lobortis elit sed massa bibendum, non commodo quam aliquam. Ut dolor turpis, feugiat eget congue quis, euismod in risus. Aenean in magna sit amet enim ullamcorper pellentesque eu sollicitudin diam. Pellentesque quis risus neque. Phasellus venenatis nisl nec felis feugiat maximus. Maecenas eu justo in dui ultricies porttitor at eu metus. Etiam vestibulum mi in enim efficitur, sit amet convallis purus feugiat. Mauris enim purus, cursus non dapibus nec, volutpat vel ante. Sed porttitor, nisl non efficitur euismod, orci ex placerat tellus, ac maximus nibh lacus eget nunc. In faucibus dignissim mauris, at faucibus mi porta fringilla. Sed vestibulum ante purus, vitae porttitor lorem posuere in.",
        mood: "happy",
        tasks: [
          { id: 1, title: "Estudar Vue.js", completed: false },
          { id: 2, title: "Almoçar", completed: true },
          { id: 3, title: "Lavar louça", completed: false }
        ],
        postedAt: new Date()
      }
    };
  },
  computed: {
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