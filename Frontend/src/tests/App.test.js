import { render, screen } from '@testing-library/vue'
import { test, expect } from 'vitest'
import { createPinia } from 'pinia'

import App from '../App.vue'

const pinia = createPinia()

test('renders the footer text', () => {
  render(App, { global: { plugins: [pinia] } })

  const footerElement = screen.getByText(/clearpoint.digital/i)
  expect(footerElement).toBeTruthy()
})
