import React, { useContext, useEffect, useState } from 'react'
import { ScrollPositionContext } from '../../../contexts/ScrollPositionContext'
import styles from './Title.module.css'

const initialState = {
  height: '100%',
  padding: '20% 0 0 15%',
}

const titleInit = {
  left: '0',
  fontSize: '6rem'
}
const subtitleInit = {
  left: '0',
  fontSize: '6rem'
}

const Title = () => {
  
  return (
    <>
      <h1 className={styles.titleName}>
          <span className={styles.capitalLetter}>M</span>
          <span>a</span>
          <span>r</span>
          <span>t</span>
          <span>í</span>
          <span>n</span>
      </h1> 
    
      <h1 className={styles.subtitle}>
          <span className={`${styles.wLetter} ${styles.capitalLetter}`}>M</span>
          <span>e</span>
          <span>b&nbsp;</span>
          <span>D</span>
          <span>e</span>
          <span>v</span>
          <span>e</span>
          <span>l</span>
          <span>o</span>
          <span>p</span>
          <span>e</span>
          <span>r</span>  
      </h1>
    </>
  )
}

export default Title