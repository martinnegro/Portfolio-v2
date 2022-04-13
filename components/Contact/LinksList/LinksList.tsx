import React from 'react'
import LinkedInLogo from '../../../public/LinkedInLogo.svg'
import GithubLogo from '../../../public/GithubLogo.svg'
import GmailLogo from '../../../public/GmailLogo.svg'

import styles from '../Contact.module.css'
const LinksList = () => {
  return (
    <ul className={styles.ul}>
        <li>
            <p>
                <GithubLogo className={styles.svg}/>
                /martinnegro
            </p>
        </li>
        <li>
            <p>
                <LinkedInLogo className={styles.svg}/>
                /in/martinnegro
            </p>        
        </li>
        <li>
            <p>
                <GmailLogo className={styles.svg}/> 
                mnegro91@gmail.com
            </p>
        </li>
    </ul>
  )
}

export default LinksList