import React from 'react'
import LinkedInLogo from '../../../public/LinkedInLogo.svg'
import GithubLogo from '../../../public/GithubLogo.svg'
import GmailLogo from '../../../public/GmailLogo.svg'

import styles from '../Contact.module.css'
import Link from 'next/link'
const LinksList = () => {
  return (
    <ul className={styles.ul}>
        <li>
            <a 
                href='https://github.com/martinnegro'
                target='_blank'
                rel="noreferrer"
                className={styles.contactLink}
            >
            <p>
                <GithubLogo className={styles.svg}/>
                /martinnegro
            </p>
            </a>
        </li>
        <li>
        <a 
                href='https://www.linkedin.com/in/martinnegro/'
                target='_blank'
                rel="noreferrer"
                className={styles.contactLink}
            >
            <p>
                <LinkedInLogo className={styles.svg}/>
                /in/martinnegro
            </p>        
            </a>
        </li>
        
        <li>
            <p>
                <GmailLogo className={styles.svg}/> 
                mnegroruffino@gmail.com
            </p>
        </li>
    </ul>
  )
}

export default LinksList