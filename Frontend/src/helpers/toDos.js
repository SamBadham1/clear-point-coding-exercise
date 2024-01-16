import axios from 'axios'
const API_URL = import.meta.env.VITE_API_URL
export default class ToDoListHelpers {
  async getAllTodos() {
    try {
      const result = await axios.get(`${API_URL}/api/todoItems`)
      return result
    } catch (error) {
      throw error
    }
  }

  async postNewToDo(toDoItem) {
    try {
      const result = await axios.post(`${API_URL}/api/todoItems`, toDoItem)
      return result
    } catch (error) {
      throw error
    }
  }

  async updateToDo(toDoItem) {
    try {
      const result = await axios.put(`${API_URL}/api/todoItems/${toDoItem.id}`, toDoItem)
      return result
    } catch (error) {
      throw error
    }
  }
}
