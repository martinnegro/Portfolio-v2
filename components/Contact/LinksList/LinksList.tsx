import React from 'react'
import LinkedInLogo from '../../../public/LinkedInLogo.svg'
import GithubLogo from '../../../public/GithubLogo.svg'
import GmailLogo from '../../../public/GmailLogo.svg'

import styles from '../Contact.module.css'
const LinksList = () => {
  return (
    <ul className={styles.ul}>
        <li>
            <GithubLogo className={styles.svg}/>
            <span>
                /martinnegro
            </span>
        </li>
        <li>
            <LinkedInLogo className={styles.svg}/>
            <span>
                /in/martinnegro
            </span>
        </li>
        <li>
            <GmailLogo className={styles.svg}/>
            <span>
                mnegro91@gmail.com
            </span>
        </li>
    </ul>
  )
}

export default LinksList