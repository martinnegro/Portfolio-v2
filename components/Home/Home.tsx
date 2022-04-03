import React from 'react';
import styles from './Home.module.css';
import Title from './Title/Title';

const Home = () => {
  return (
    <section id='home' className={styles.sectionHome}>
      <Title />
    </section>
  )
}

export default Home;