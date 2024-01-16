import { defineStore } from 'pinia'
import ToDoListHelpers from '../helpers/toDos'
const toDoData = new ToDoListHelpers()

export const usetoDoStore = defineStore('toDoStore', {
  state: () => {
    return {
      toDoItems: {
        data: [],
      },
      isLoading: false,
      toDosLength: 0,
    }
  },
  actions: {
    async setToDoStore() {
      this.isLoading = true
      this.toDoItems = await toDoData.getAllTodos()
      this.toDosLength = this.toDoItems.data.length
      this.isLoading = false
    },

    async postNewToDo(toDo) {
      this.isLoading = true
      await toDoData.postNewToDo(toDo)
      this.isLoading = false
    },

    async updateToDo(toDo) {
      this.isLoading = true
      await toDoData.updateToDo(toDo)
      this.isLoading = false
    },
  },
})
