import { test, expect, describe, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { usetoDoStore } from '../stores/toDoStore'
import { render, screen } from '@testing-library/vue'
import ToDoDashboardVue from '../components/ToDoDashboard.vue'

describe('To Do Dashboard Renders', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  test('Check to do dashboard elements render', () => {
    render(ToDoDashboardVue)

    const toDoStore = usetoDoStore()
    toDoStore.setToDoStore()

    if (toDoStore.toDosLength > 0) {
      toDoStore.toDoItems.data.forEach((item) => {
        expect(screen.getByText(item.id)).toBeInTheDocument()
        expect(screen.getByText(item.description)).toBeInTheDocument()
      })
    } else {
      const noDatalement = screen.getByTestId('no-todos-msg').textContent
      expect(noDatalement).toBe('No To Dos Added yet')
    }
  })
})
