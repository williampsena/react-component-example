import { render, screen } from '@testing-library/react'
import React from 'react'
import { App } from '../app'

describe('App', () => {
  it('should mount', async () => {
    render(<App />)

    expect(screen.getByRole('button')).toHaveTextContent('Change Image')
  })
})
