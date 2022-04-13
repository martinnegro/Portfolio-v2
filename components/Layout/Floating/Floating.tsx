import React from 'react'
import styles from './Floating.module.css';
import GithubLogo from '../../../public/GithubLogo.svg';
import LanguageButton from './LanguageButton';
import LinkedInLogo from '../../../public/LinkedInLogo.svg';


const Floating = () => {
    return (
        <div className={styles.container}>
            <div className={styles.link}>
                <a href='https://github.com/martinnegro' target='_blank'>
                    <GithubLogo className={styles.filling}/>
                </a>
            </div>
            <div className={styles.link}>
                <a href='https://www.linkedin.com/in/martinnegro/' target='_blank'>
                    <LinkedInLogo className={styles.filling}/>
                </a>    
            </div>
            <div className={styles.buttonContainer}>
                <LanguageButton/>
            </div>
        </div>
  )
}

export default Floating;