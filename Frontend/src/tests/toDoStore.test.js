import { test, expect, describe, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { usetoDoStore } from '../stores/toDoStore'

describe('To Do Items Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  test('Get To dos response returns no data', () => {
    const toDoStore = usetoDoStore()

    toDoStore.setToDoStore()
    expect(toDoStore.toDoItems.data.length).toBe(0)
  })

  test('Adding to Do works', async () => {
    const toDoStore = usetoDoStore()
    const randomnumber = Math.random().toString()
    const date = new Date()
    const newToDo = { description: 'test' + randomnumber, isCompleted: false, dateAdded: date }
    await toDoStore.postNewToDo(newToDo)
    await toDoStore.setToDoStore()
    const toDoArray = toDoStore.toDoItems.data.map((t) => t.description)
    expect(toDoArray).toContain(newToDo.description)
  })

  test('Blank todos returns correct error', async () => {
    const toDoStore = usetoDoStore()
    const newToDo = { description: '', isCompleted: false }

    let errorResponse
    try {
      await toDoStore.postNewToDo(newToDo)
    } catch (error) {
      errorResponse = error.response.data
    }
    expect(errorResponse).toBe('Description is required')
  })
})
