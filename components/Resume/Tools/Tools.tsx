import React from 'react'
import Logos from './Icons/index'

import styles from '../Resume.module.css'


const Tools = () => {
  return (
    <div className={styles.tools}>
      {
        Logos.map((Logo) => <Logo className={styles.svgLogo}/>)
      }
    </div>
  )
}

export default Tools