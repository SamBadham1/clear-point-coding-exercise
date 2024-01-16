<script>
import { defineComponent, onMounted } from 'vue'
import ToDoList from './ToDoList.vue'
import AddToDo from './AddToDo.vue'
import { usetoDoStore } from '../stores/toDoStore'
export default defineComponent({
  components: { ToDoList, AddToDo },
  setup() {
    const toDoStore = usetoDoStore()
    onMounted(async () => {
      //Get data
      await toDoStore.setToDoStore()
    })

    return { toDoStore }
  },
})
</script>
<template>
  <main class="App">
    <div class="container">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Add new To Do</h5>
          <AddToDo />
        </div>
      </div>
      <br />
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">To Do List</h5>
          <div v-if="toDoStore.toDoItems.data && toDoStore.toDoItems.data.length > 0"><ToDoList /></div>
          <div data-testid="no-todos-msg" v-else>No To Dos Added yet</div>
        </div>
      </div>

      <footer className="page-footer font-small teal pt-4">
        <div className="footer-copyright text-center py-3">
          © 2021 Copyright:
          <a href="https://clearpoint.digital" target="_blank" rel="noreferrer"> clearpoint.digital </a>
        </div>
      </footer>
    </div>
  </main>
</template>
