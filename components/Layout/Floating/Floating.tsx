import React from 'react'
import styles from './Floating.module.css';
import GithubLogo from './GithubLogo';
import LanguageButton from './LanguageButton';
import { LinkedInLogo } from './LinkedInLogo';


const Floating = () => {
    return (
        <div className={styles.container}>
            <div className={styles.link}>
                <a href='https://github.com/martinnegro' target='_blank'>
                    <GithubLogo style={styles.filling}/>
                </a>
            </div>
            <div className={styles.link}>
                <a href='https://www.linkedin.com/in/martinnegro/' target='_blank'>
                    <LinkedInLogo style={styles.filling}/>
                </a>    
            </div>
            <div className={styles.buttonContainer}>
                <LanguageButton style={styles.button} />
            </div>
        </div>
  )
}

export default Floating;