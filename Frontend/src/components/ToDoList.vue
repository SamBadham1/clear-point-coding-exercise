<script>
import { ref, onMounted, defineComponent } from 'vue'
import { usetoDoStore } from '../stores/toDoStore'
import FormatDate from '../helpers/FormatDate'
export default defineComponent({
  setup() {
    const description = ref('')
    const items = ref([])
    const toDoStore = usetoDoStore()
    const formatDate = new FormatDate()

    const handleDescriptionChange = (event) => {
      // todo
    }

    async function handleMarkAsComplete(item) {
      if (item.isCompleted) {
        item.isCompleted = false
      } else {
        item.isCompleted = true
      }
      try {
        await toDoStore.updateToDo(item)
        await toDoStore.setToDoStore
      } catch (error) {
        console.error(error)
      }
    }

    return { toDoStore, description, handleDescriptionChange, handleMarkAsComplete, formatDate }
  },
})
</script>

<template>
  <div class="row">
    <div class="col">
      <span>
        Showing {{ toDoStore.toDoItems.data.length }} Item(s)
        <button type="button" class="pull-right btn btn-primary" @click="toDoStore.setToDoStore()">Refresh</button>
      </span>
      <table class="table table-hover">
        <thead>
          <tr>
            <th class="test-id">Id</th>
            <th>Description</th>
            <th>Date added</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in toDoStore.toDoItems.data" :key="item.id">
            <td>
              <div>{{ item.id }}</div>
            </td>
            <td>
              <div v-if="!item.isCompleted">{{ item.description }}</div>
              <div v-else>
                <strike>{{ item.description }}</strike>
              </div>
            </td>
            <td>
              <div>{{ formatDate.formatDate(item.dateAdded) }}</div>
            </td>
            <td>
              <button type="button" class="btn btn-warning btn-sm" @click="() => handleMarkAsComplete(item)">
                <div v-if="!item.isCompleted">Mark as completed</div>
                <div v-else>Mark as uncompleted</div>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.App {
  text-align: center;
}
</style>
