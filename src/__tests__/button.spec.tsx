import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { Button } from '../components/button'

describe('Button', () => {
  it('should mount and click component', async () => {
    const label = 'Click'
    const handleClick = jest.fn()

    render(<Button label={label} onClick={handleClick} />)

    fireEvent.click(screen.getByText(label))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
