import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { RandomImage } from '../components/randomImage'

describe('RandomImage', () => {
  it('should mount and change image', async () => {
    render(<RandomImage />)

    await userEvent.click(screen.getByText('Change Image'))

    expect(screen.getByRole('button')).toHaveTextContent('🖐🏾...')

    const image = screen.getByRole('img')
    fireEvent.load(image)

    waitFor(() => screen.getByRole('img'))

    expect(screen.getByRole('button')).toHaveTextContent('Change Image (1)')
  })
})
