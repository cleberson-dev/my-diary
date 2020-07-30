<template>
  <main>
    <h1>Me diga sobre seu dia</h1>
    <form>
      <textarea
        v-model="content"
        :class="['field', 'form-group', { error: $v.content.$error }]"
        placeholder="Escreva de forma sucinta e clara o resumo do seu dia..."
      />

      <div class="form-group">
        <label>Título</label>
        <input
          type="text"
          :class="['field', { error: $v.title.$error }]"
          v-model.trim="$v.title.$model"
        />
      </div>

      <div class="form-group">
        <label>Humor</label>
        <select class="field" v-model="mood">
          <option v-for="mood in moods" :key="mood" :value="mood">{{mood}}</option>
        </select>
      </div>

      <div class="form-group">
        <label>Tarefas</label>
        <div class="add-task-group">
          <input type="text" class="field" v-model="newTask" ref="task" />
          <button class="add-task-btn" @click.prevent="addTask">+</button>
        </div>

        <ul v-if="tasks" class="staged-tasks">
          <li v-for="task in tasks" :key="task.id" :class="{ completed: task.completed }">
            <span class="task-title">{{task.title}}</span>
            <button class="icon-btn" @click="toggleCompleted(task.id)">
              <icon-base icon-color="white">
                <icon-correct-filled v-if="task.completed" />
                <icon-correct-outline v-else />
              </icon-base>
            </button>
            <button class="icon-btn" @click="removeTask(task.id)">
              <icon-base icon-color="white">
                <icon-trash />
              </icon-base>
            </button>
          </li>
        </ul>
      </div>

      <button class="submit-btn" type="submit" @click.prevent="handleSubmit">Registrar dia</button>
    </form>
  </main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { 
  required, 
  minLength, maxLength 
} from "vuelidate/lib/validators";

import IconBase from "../components/IconBase";
import IconTrash from "../components/icons/IconTrash";
import IconCorrectFilled from "../components/icons/IconCorrectFilled";
import IconCorrectOutline from "../components/icons/IconCorrectOutline";

export default {
  data() {
    return {
      content: "",
      title: "",
      newTask: "",
      tasks: [],
      mood: "happy",
      moods: ["happy", "sad", "angry"],
    };
  },
  computed: mapGetters(["existsTodayRecord"]),
  methods: {
    ...mapActions(["addRecord"]),
    handleSubmit() {
      // Só pode haver um registro por dia
      if (this.existsTodayRecord) return;

      const newRecord = {...this.form};
      this.addRecord(newRecord);
      this.$router.push('/');
    },
    addTask() {
      this.tasks.push({
        id: this.$uuid.v4(),
        title: this.newTask,
        completed: false,
      });
      this.newTask = "";
      this.$refs.task.focus();
    },
    toggleCompleted(id) {
      this.tasks = this.tasks.map((task) => {
        if (task.id !== id) return task;
        return { ...task, completed: !task.completed };
      });
    },
    removeTask(id) {
      this.tasks = this.tasks.filter((task) => id !== task.id);
    },
  },
  components: {
    IconBase,
    IconTrash,
    IconCorrectFilled,
    IconCorrectOutline,
  },
  validations: {
    title: {
      required,
      minLength: minLength(8),
      maxLength: maxLength(39)
    },
    content: {
      required,
      minLength: minLength(140)
    }
  },
};
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
  background-color: #fcfbff;
  border: 1px solid #b8bedd;
  border-radius: 5px;
  padding: 7px 0.75rem;
  font-family: "Montserrat", sans-serif;
}
.field:focus {
  border: 1px solid rgb(141, 153, 218);
  outline: none;
}
.field.error,
.field.error:focus {
  border-color: red;
  outline-color: none;
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

.submit-btn {
  color: white;
  background-color: #f0a6ca;
  font-size: 1.1rem;
  font-family: "Montserrat", sans-serif;
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
  background-color: #9c89b8;
  color: white;
  width: min-content;
  min-width: 60%;
  max-width: 100%;
  padding: 7px 10px;
  border-radius: 5px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
}
.staged-tasks .completed {
  text-decoration: line-through;
  font-weight: 700;
}

.add-task-btn {
  font-weight: 700;
  font-size: 1rem;
  background-color: transparent;
  outline: none;
  border: none;
  position: absolute;
  right: 0;
  top: 0;
  padding: 7px 0.75rem;
}

.add-task-group {
  position: relative;
  width: fit-content;
}

.icon-btn {
  background-color: transparent;
  outline: none;
  border: none;
}

.task-title {
  flex-grow: 1;
  overflow: hidden;
  text-overflow: clip;
  white-space: nowrap;
}
</style>