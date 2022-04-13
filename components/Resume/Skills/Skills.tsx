import React, { useContext } from 'react';
import { LangContext, LangContextValues } from '../../../contexts/LangContext/LangContext';
import styles from '../Resume.module.css'

const Skills = () => {
  const { text } = useContext(LangContext) as LangContextValues
  return (
    <div className={styles.skills}>
      <h2>
        { text?.RESUME.RESUME_TITLE }
      </h2>
        { text?.RESUME.RESUME_PARAGRAPHS.map((text) => <p key={text.id} className={styles.p}> { text.text } </p>) }
    </div>
  )
}

export default Skills