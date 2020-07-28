<template>
  <div class="real-datetime">
    <time :datetime="formattedTime" class="time">{{ formattedTime }}</time>
    <time :datetime="formattedDate" class="date">{{ formattedDate }}</time>
  </div>
</template>

<script>
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

export default {
  data() {
    return {
      intervalID: null,
      datetime: new Date()
    }
  },
  computed: {
    formattedDate() {
      const formatText = "d 'de' MMMM 'de' yyyy";
      return format(
        this.datetime, 
        formatText, 
        { locale: ptBR }
      );
    },
    formattedTime() {
      const { datetime } = this;

      const hh = `${datetime.getHours()}`.padStart(2, '0');  
      const mm = `${datetime.getMinutes()}`.padStart(2, '0');  

      return `${hh}:${mm}`;
    }
  },
  created() {
    this.intervalID = setInterval(() => {
      this.datetime = new Date();
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  }
}
</script>

<style scoped>
.real-datetime {
  text-align: right;
}

.real-datetime time {
  font-weight: 700;
  display: block;
}

.real-datetime .time {
  color: #9C89B8;
  font-size: 1.3rem;
}

.real-datetime .date {
  color: #B8BEDD;
}
</style>