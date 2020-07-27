<template>
  <main>
    <h1>Me diga sobre seu dia</h1>
    <form>
      <textarea
        v-model="form.content"
        class="field form-group" 
        placeholder="Escreva de forma sucinta e clara o resumo do seu dia..." 
      />

      <div class="form-group">
        <label>Humor</label>
        <select class="field">
          <option
            v-for="mood in moods"
            :key="mood"
            value="mood"
          >{{mood}}</option>
        </select>
      </div>

      <div class="form-group">
        <label>Tarefas</label>
        <input type="text" class="field" v-model="form.newTask" />

        <ul class="staged-tasks">
          <li>Almoçar</li>
          <li class="completed">Estudar</li>
        </ul>
      </div>

      <button type="submit" @click.prevent="handleSubmit">
        Registrar dia
      </button>
    </form>
  </main>  
</template>

<script>
export default {
  data() {
    return {
      form: {
        content: '',
        newTask: '',
        tasks: [
          { id: 1, title: 'Almoçar', completed: false },
          { id: 2, title: 'Estudar', completed: true }
        ]
      },
      moods: [ 'happy', 'sad', 'angry' ]
    }
  },
  methods: {
    handleSubmit() {
      console.log(this.form);
    }
  }
}
</script>

<style scoped>
main {
  padding: 1rem 1.25rem;
}

label {
  display: block;
  font-weight: 700;
}

.field {
  color: #554967;
  background-color: #FCFBFF;
  border: 1px solid #B8BEDD;
  border-radius: 5px;
  padding: 7px 0.75rem;
  font-family: 'Montserrat', sans-serif;
}
.field:focus {
  border: 1px solid rgb(141, 153, 218);
  outline: 1px solid rgb(141, 153, 218);
}

textarea.field {
  width: 100%;
  height: 10rem;
  box-sizing: border-box;
}
textarea.field::placeholder {
  font-style: italic;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  margin-bottom: 5px;
}

button {
  color: white;
  background-color: #F0A6CA;
  font-size: 1.1rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  width: 100%;
  padding: 7px 0;
  outline: none;
  border: none;
  border-radius: 5px;
}

.staged-tasks {
  padding-left: 0;
}
.staged-tasks > li {
  font-size: 0.85rem;
  list-style: none;
  background-color: #9C89B8;
  color: white;
  width: 0;
  min-width: 50vw;
  padding: 7px 10px;
  border-radius: 5px;
  margin-bottom: 8px;
}
.staged-tasks .completed {
  text-decoration: line-through;
  font-weight: 700;
}
</style>