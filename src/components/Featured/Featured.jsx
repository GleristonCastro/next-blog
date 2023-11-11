import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, lama dev here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src='/p1.jpeg' alt='' fill />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo repellat unde culpa recusandae sapiente nemo tempora, expedita incidunt, sequi, atque quae dolor eius consequatur?
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured