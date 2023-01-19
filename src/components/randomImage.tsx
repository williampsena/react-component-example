import React, { useCallback, useState } from 'react'
import { Button } from './button'

export function RandomImage() {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false)

  const handleClick = useCallback(() => {
    if (loading) return

    setLoading(true)
    setCount(count + 1)
  }, [count, loading])

  const handleLoadImage = useCallback(() => {
    setLoading(false)
  }, [count, loading])

  const label = count == 0 ? 'Change Image' : `Change Image (${count})`

  return (
    <div style={styles.container}>
      <img
        style={styles.img}
        src={`https://picsum.photos/400?${count}`}
        onLoad={handleLoadImage}
      />
      <div>
        <title>Random Image Example</title>
        <Button
          style={styles.button}
          label={label}
          loading={loading}
          onClick={handleClick}
        />
      </div>
    </div>
  )
}

const styles = {
  button: {
    width: '100%',
  },
  img: {
    borderRadius: '5px 5px 0 0',
  },
  container: {
    border: '5px dotted #607D8B',
    margin: '5rem auto',
    width: '400px',
    padding: '1rem',
  },
}
