<template>
  <li>
    <div class="header">
      <time class="post-date">
        <div class="day">{{ day }}</div>
        <div class="additional">
          <div class="weekday">{{ weekday }}</div>
          <div class="month">
            <span>de</span>
            {{ month }}
          </div>
        </div>
      </time>
      <div class="tasks-info">
        {{tasks.completed}}/{{tasks.total}}
        <span>atividades</span>
      </div>
      <img class="mood-icon" :src="'/img/moods/' + mood + '.svg'" />
    </div>

    <h3 class="title">{{ title }}</h3>
  </li>
</template>

<script>
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

export default {
  props: {
    title: String,
    postedAt: Date,
    mood: {
      type: String,
      default: 'default'
    },
    tasks: Object
  },
  computed: {
    day() {
      return this.postedAt.getDate();
    },
    weekday() {
      const formatToken = 'EEEE';
      const formattedWeekday = format(
        this.postedAt, 
        formatToken, 
        { locale: ptBR }
      );
      const capitalizedWeekday = formattedWeekday.replace(/^\w/, c => c.toUpperCase());
      return capitalizedWeekday;
    },
    month() {
      const formatToken = 'MMMM';
      const formattedMonth = format(this.postedAt, formatToken, { locale: ptBR });
      
      const capitalizedMonth = formattedMonth.replace(/^\w/, c => c.toUpperCase());
      
      return capitalizedMonth;
    }
  }
};
</script>

<style scoped>
li {
  list-style: none;
  background-color: #fcfbff;
  padding: 1.25rem;
}

.header {
  display: flex;
  align-items: center;
}

.tasks-info {
  font-weight: 700;
  text-align: right;
  font-size: 0.9rem;
  color: #9c89b8;
}

.tasks-info span {
  color: #b8bedd;
  display: block;
  font-size: 0.75rem;
}

.day {
  font-size: 2.2rem;
  color: #9c89b8;
}

.additional {
  color: #b8bedd;
}

.post-date {
  font-weight: 700;
  display: flex;
  align-items: center;
}

.post-date > .day {
  margin-right: 5px;
}

.title {
  font-size: 1.6rem;
  margin-top: 5px;
  margin-bottom: 0;
}

.mood-icon {
  width: 2rem;
  height: 2rem;
}

.header > .post-date {
  flex-grow: 1;
}
.header > .mood-icon {
  margin-left: 5px;
}
</style>