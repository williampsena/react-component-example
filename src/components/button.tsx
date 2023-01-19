import React, { CSSProperties } from 'react'

export interface ButtonProps {
  label: string
  loading?: boolean
  style?: CSSProperties | undefined
  onClick: VoidFunction
}

export function Button(props: ButtonProps) {
  const { label, loading, style, onClick } = props
  const componentStyle = style ? { ...defaultStyle, ...style } : defaultStyle

  const buttonLabel = loading ? '🖐🏾...' : label

  return (
    <button style={componentStyle} type="button" onClick={onClick}>
      {buttonLabel}
    </button>
  )
}

const defaultStyle: React.CSSProperties = {
  display: 'inline-block',
  padding: '15px 25px',
  fontSize: '24px',
  cursor: 'pointer',
  textAlign: 'center',
  textDecoration: 'none',
  outline: 'none',
  color: '#fff',
  backgroundColor: '#212121',
  border: 'none',
  borderRadius: '15px',
}
