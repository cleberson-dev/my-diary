<template>
  <div class="home">
    <div class="intro" v-if="existsTodayRecord">
      <h1>Parece tudo certo...</h1>
      <p>Você já escreveu hoje. Se prepare para amanhã.</p>
    </div>
    <div class="intro" v-else>
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
      <router-link to="/registros">
        <div class="btn-wrapper">
          <flat-button 
            title="Veja mais"
            :is-extended="true"
            bkg-color="#F0A6CA" 
          />
        </div>
      </router-link>
      
      <pagination
        :current-page="5"
        :total-items="102"
        :items-per-page="10"
      />
    </main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

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
  computed: {
    ...mapGetters({ records: 'allRecords', existsTodayRecord: 'existsTodayRecord' })
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

a {
  text-decoration: none;
}

main > .pagination {
  margin-top: 1rem;
}


.btn-wrapper {
  box-sizing: border-box;
  padding: 0 1.25rem;
}
</style>