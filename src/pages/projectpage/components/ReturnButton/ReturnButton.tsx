import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ReturnButton.module.scss'

const ReturnButton = () => {
  return (
    <Link to="/">
      <button className={styles.signup}>Return</button>
    </Link>
  )
}

export default ReturnButton
