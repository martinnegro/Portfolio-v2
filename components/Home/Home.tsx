import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <section id='home' className={styles.sectionHome}>
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
        <span className={styles.writingText}>e</span>
        <span>b</span>
        <span>{' '}</span>
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
    </section>
  )
}

export default Home;