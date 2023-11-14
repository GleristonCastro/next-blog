import React from 'react'
import styles from './comments.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Comments = () => {
  const status = 'authenticated'

  return (
    <div className={styles.container}>
      <h3 className='styles.title'>Comments</h3>
      {status === 'authenticated' ? (
        <div className={styles.write}>
          <textarea
            placeholder='write a comment...'
            className={styles.input}>
          </textarea>
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href='/login'>Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src='/p1.jpeg'
              alt=''
              width={50}
              height={50}
              className={styles.Image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2023</span>
            </div>
          </div>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta saepe, dolore, nam ex fugit corporis animi laborum esse officiis expedita inventore vero veritatis. Aspernatur soluta iusto similique harum delectus voluptate.</p>
        </div>
      </div>
    </div>
  )
}

export default Comments