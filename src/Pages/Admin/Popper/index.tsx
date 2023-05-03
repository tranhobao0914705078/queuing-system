import React from 'react'
import styles from './Popper.module.css'

interface Props {
  children: React.ReactNode;
  [key: string]: any;
}
export const Wrapper = ({ children }:Props) => {
  return (
    <div className={styles.wrapper}>{children}</div>
  )
}
