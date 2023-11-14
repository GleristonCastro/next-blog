'use client'

import React, { useState } from 'react'
import styles from './whitePage.module.css'
import Image from 'next/image'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.bubble.css'

const WhitePage = () => {
  const [ open, setOpen ] = useState(false)
  const [ value, setValue ] = useState('')
  return (
    <div className={styles.container}>
      <input type="text" placeholder='Title' className={styles.input} />
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image
            src='/plus.png'
            alt=''
            width={16}
            height={16}
          />
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <Image
                src='/image.png'
                alt=''
                width={16}
                height={16}
              />
            </button>
            <button className={styles.addButton}>
              <Image
                src='/external.png'
                alt=''
                width={16}
                height={16}
              />
            </button>
            <button className={styles.addButton}>
              <Image
                src='/video.png'
                alt=''
                width={16}
                height={16}
              />
            </button>
          </div>
        )}
        <ReactQuill
          theme='bubble'
          value={value}
          onChange={setValue}
          placeholder='Tell you story...'
          className={styles.textArea}
        />
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  )
}

export default WhitePage