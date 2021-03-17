import * as React from 'react'
import styles from './styles.module.css'

interface CardProps {
  title: string
  children?: React.ReactNode
}

  const Card = ({ title, children }: CardProps): JSX.Element => {
  return (
    <div className={styles.card}>
    <h1 className={styles.title} >{title}</h1>
    <div className={styles.body}></div>
{children }
</div>
  ) 
}
 

export default Card