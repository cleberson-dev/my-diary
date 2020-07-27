<template>
  <div class="home">
    <div class="intro">
      <h1>Então... Como foi seu dia hoje?</h1>
      <p>Você não escreveu hoje ainda. Está pronto?</p>
      <router-link to="/escrever">
        <flat-button title="Escrever">
          <icon-base
            :width="24"
            :height="24"
          >
            <icon-diary />
          </icon-base>
        </flat-button>
      </router-link>
    </div>
    <main>
      <record-list :records="records" />
      <flat-button 
        title="Veja mais"
        :is-extended="true"
        bkg-color="#F0A6CA" 
      />
      
      <pagination
        :current-page="5"
        :total-items="102"
        :items-per-page="10"
      />
    </main>
  </div>
</template>

<script>
import RecordList from '../components/RecordList';
import FlatButton from '../components/FlatButton';
import Pagination from '../components/Pagination';
import IconBase from '../components/IconBase';
import IconDiary from '../components/icons/IconDiary';


export default {
  name: 'HomePage',
  components: {
    RecordList,
    FlatButton,
    Pagination,
    IconBase,
    IconDiary
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
.home {
  margin-bottom: 2rem;
}

.home ul {
  margin-bottom: 1.5rem;
}

.intro {
  padding: 0 1.25rem;
  margin: 2rem 0;
}

.intro > h1 {
  font-size: 1.7rem;
  margin-bottom: 0;
}

.intro > a {
  text-decoration: none;
}

main > .pagination {
  margin-top: 1rem;
}
</style>