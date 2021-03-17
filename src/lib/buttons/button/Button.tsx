import * as React from 'react'

interface ButtonProps {
  text: string
}

  const Button = ({ text }: ButtonProps) => {
  return <button>Button text{text}</button>
}
 

export default Button