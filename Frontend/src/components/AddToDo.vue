<template>
  <div class="row">
    <div class="col">
      <div class="row mb-3">
        <div class="col col-md-6">
          <div class="form-floating mb-3">
            <input
              class="form-control"
              type="text"
              id="floatingInput"
              placeholder="Enter description..."
              v-model="description"
              @keyup.enter="handleAdd"
            />

            <label for="floatingInput">Enter description...</label>
          </div>
        </div>
        <div class="col col-md-6 gap-2">
          <div class="hstack gap-2">
            <button type="button" class="btn btn-primary" @click="handleAdd">Add Item</button>
            <button
              type="button"
              v-if="description && description.length > 0"
              class="btn btn-secondary"
              @click="handleClear"
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
import { usetoDoStore } from '../stores/toDoStore'
export default defineComponent({
  setup() {
    const description = ref('')
    const toDoStore = usetoDoStore()

    async function handleAdd() {
      const date = new Date()
      const newToDo = { description: '', isCompleted: false, dateAdded: date }
      newToDo.description = description.value

      try {
        await toDoStore.postNewToDo(newToDo)
        await toDoStore.setToDoStore()
        handleClear()
      } catch (error) {
        alert(error.response.data)
        console.error(error)
      }
    }

    function handleClear() {
      description.value = ''
    }

    return { description, handleAdd, handleClear }
  },
})
</script>
