import React from 'react'
import styles from './authLinks.module.css'
import Link from 'next/link'

const AuthLinks = () => {
  //temporary
  const status = 'notauthenticated'

  return (
    <>
    {status === 'notauthenticated'
    ? (
      <Link href='/login'>Login</Link>
    )
    : (
      <>
      <Link href='/white'>White</Link>
      <span className={styles.link}>Logout</span>
      </>
    )
    }
    </>
  )
}

export default AuthLinks